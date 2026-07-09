import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

function schemaFromUrl(url?: string): string | undefined {
  try {
    return new URL(url ?? '').searchParams.get('schema') ?? undefined;
  } catch {
    return undefined;
  }
}
const schema = schemaFromUrl(process.env.DATABASE_URL);
const adapter = new PrismaPg(
  { connectionString: process.env.DATABASE_URL },
  schema ? { schema } : undefined,
);
const prisma = new PrismaClient({ adapter });

/**
 * Seed de démonstration — données inspirées de MyDigitalSchool.
 *
 * Stratégie : nettoyage complet (ordre inverse des FK) puis insertion.
 * Rejouable. Déterministe (aucun aléatoire) => même résultat à chaque run.
 * Destructif -> réservé au dev/démo (bloqué en production sauf FORCE_SEED=true).
 *
 * Choix de modélisation validés :
 *  - Le NIVEAU est porté par la formation (Degree). ClassGroup = simple lettre (A, B…).
 *  - Rôles : Étudiant, Intervenant, Administration.
 *  - E-mails : prenom.nom@my-digital-school.org (dédup par suffixe si collision).
 *  - Périmètre : MDS Angers = données riches ; les autres campus = jeu plus léger.
 */

const PLACEHOLDER_PASSWORD = 'CHANGEME_hash_placeholder';
const EMAIL_DOMAIN = 'my-digital-school.org';

// --- Référentiels ---------------------------------------------------------

const CITIES = [
  'Angers', 'Annecy', 'Bordeaux', 'Caen', 'Grenoble', 'Lille', 'Lyon',
  'Melun', 'Montpellier', 'Nancy', 'Nantes', 'Nice', 'Paris', 'Rennes',
  'Saint-Quentin-en-Yvelines', 'Toulouse', 'Vannes',
];

const DEGREES = [
  // Bac+2
  'Bachelor Digital Design', 'Bachelor Informatique', 'Bachelor Marketing Digital',
  'BTS Services Informatiques aux Organisations',
  // Bac+3
  "Bachelor Chargé d'Affaires Web", 'Bachelor Chef de Projet Digital',
  'Bachelor Création Numérique', 'Bachelor Cybersécurité et Administrateur Réseau',
  'Bachelor Data Analyst et IA', 'Bachelor Développeur Web',
  'Bachelor UX/UI Design', 'Bachelor Webmarketing & Social Media',
  // Bac+5
  'MBA Big Data & Intelligence Artificielle', 'MBA Cybersécurité et Architecture Réseau',
  'MBA Développeur Full Stack', 'MBA Direction Artistique Digitale',
  'MBA Entrepreneuriat et Digital Business', 'MBA Expert Marketing Digital',
  'MBA Lead UX/UI Designer', 'MBA Management de Projet Digital',
];

const DEGREE_DFS = 'MBA Développeur Full Stack';

// Matières M1 DFS (imposées) + pool inventé pour les autres niveaux
const SUBJECTS_DFS = [
  'Architecture logicielle', 'Conception technique', 'DevOps, Docker',
  'Développement back-end avancé', 'Développement front-end avancé',
  'Management de Projet',
];
const SUBJECTS_OTHERS = [
  'Algorithmique', 'Bases de données', 'Programmation orientée objet',
  'Développement web', 'UX/UI Design', 'Design graphique', 'Culture numérique',
  'Marketing digital', 'SEO / SEA', 'Gestion de projet Agile', 'Cybersécurité',
  'Réseaux', "Systèmes d'exploitation", 'Cloud computing',
  'Intelligence artificielle', 'Data analyse', 'Communication',
  'Anglais professionnel', 'Droit du numérique', 'Entrepreneuriat',
  'Motion design', 'Intégration web', 'API & Microservices',
  'Tests & Qualité logicielle', 'Machine Learning',
];

const TYPE_EVENTS = [
  'Foodtruck', 'Projets étudiants', 'Aides', 'Actualités officielles',
  'Événements nationaux', 'Afterworks & soirée', 'Tournois sportifs',
  'Ateliers associatifs', 'Networking',
];

const TYPE_TOPICS = [
  'Tutorat', 'Mentorat', "Demande d'aide", "Retour d'expérience",
  'Recherche de stage',
];

const TYPE_REPORTS = ['Bug', 'Dysfonctionnement', 'Panne', 'Demande de matériel'];

// Tag.name est en varchar(25) -> libellés courts
const TAGS = [
  'DFS', 'Dév Web', 'UX/UI', 'Cybersécurité', 'Data & IA', 'Marketing digital',
  'Digital Design', 'Informatique', 'Chef de projet', 'Création num.', 'BTS SIO',
  'Big Data & IA', "Recherche d'entreprise", 'Recherche de stage', 'Entraide',
  'Projet tutoré',
];

// Pools de noms pour générer les utilisateurs (déterministe par index)
const FIRST_NAMES = [
  'Emma', 'Louis', 'Jade', 'Gabriel', 'Louise', 'Raphaël', 'Alice', 'Jules',
  'Chloé', 'Arthur', 'Lina', 'Hugo', 'Léa', 'Adam', 'Manon', 'Nathan',
  'Camille', 'Ethan', 'Sarah', 'Théo', 'Inès', 'Noah', 'Zoé', 'Lucas', 'Anna',
  'Enzo', 'Juliette', 'Tom', 'Eva', 'Maxime', 'Clara', 'Paul', 'Lucie',
  'Antoine', 'Marie', 'Nicolas', 'Julie', 'Thomas', 'Laura', 'Alexandre',
];
const LAST_NAMES = [
  'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit',
  'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel',
  'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier', 'Morel',
  'Girard', 'André', 'Lefevre', 'Mercier', 'Dupont', 'Lambert', 'Bonnet',
  'François', 'Martinez',
];

// Campus avec un catalogue partiel (les autres ont les 20 formations)
const PARTIAL_CAMPUSES = new Set(['Vannes', 'Caen', 'Melun']);

// --- Helpers --------------------------------------------------------------

function deburr(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

const usedEmails = new Set<string>();
function makeEmail(first: string, last: string): string {
  const base = `${deburr(first).toLowerCase()}.${deburr(last).toLowerCase().replace(/[^a-z]/g, '')}`;
  let email = `${base}@${EMAIL_DOMAIN}`;
  let n = 1;
  while (usedEmails.has(email)) {
    n += 1;
    email = `${base}${n}@${EMAIL_DOMAIN}`;
  }
  usedEmails.add(email);
  return email;
}

let nameCursor = 0;
function nextName(): { name: string; surname: string } {
  const first = FIRST_NAMES[nameCursor % FIRST_NAMES.length];
  const last = LAST_NAMES[Math.floor(nameCursor / FIRST_NAMES.length) % LAST_NAMES.length + (nameCursor % LAST_NAMES.length)] ?? LAST_NAMES[nameCursor % LAST_NAMES.length];
  nameCursor += 1;
  return { name: first, surname: last };
}

let cardCursor = 0;
function nextCardNumber(): string {
  cardCursor += 1;
  return `MDS-${String(cardCursor).padStart(6, '0')}`;
}

let qrCursor = 0;
function nextQr(): string {
  qrCursor += 1;
  return `QR-${String(qrCursor).padStart(6, '0')}`;
}

let serialCursor = 0;
function nextSerial(prefix: string): string {
  serialCursor += 1;
  return `${prefix}-${String(serialCursor).padStart(6, '0')}`;
}

// --- Nettoyage ------------------------------------------------------------

async function clean() {
  await prisma.beNotifiedFor.deleteMany();
  await prisma.bePassengerFor.deleteMany();
  await prisma.beBorrowedBy.deleteMany();
  await prisma.beProfessorFor.deleteMany();
  await prisma.workAt.deleteMany();
  await prisma.linkForumTopicTag.deleteMany();
  await prisma.linkDegreeSchool.deleteMany();
  await prisma.forumMessage.deleteMany();
  await prisma.authSession.deleteMany();
  await prisma.studentCard.deleteMany();
  await prisma.ticketReport.deleteMany();
  await prisma.news.deleteMany();
  await prisma.event.deleteMany();
  await prisma.tutorial.deleteMany();
  await prisma.carpool.deleteMany();
  await prisma.equipment.deleteMany();
  await prisma.forumTopic.deleteMany();
  await prisma.parking.deleteMany();
  await prisma.user.deleteMany();
  await prisma.classGroup.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.typeTopic.deleteMany();
  await prisma.typeReport.deleteMany();
  await prisma.typeEvent.deleteMany();
  await prisma.category.deleteMany();
  await prisma.degree.deleteMany();
  await prisma.role.deleteMany();
  await prisma.school.deleteMany();
}

// --- Seed principal -------------------------------------------------------

async function main() {
  if (process.env.NODE_ENV === 'production' && process.env.FORCE_SEED !== 'true') {
    throw new Error('Seed bloqué en production. Définir FORCE_SEED=true pour forcer.');
  }

  console.log('🧹 Nettoyage...');
  await clean();

  console.log('🌱 Référentiels...');
  const roles = await prisma.role.createManyAndReturn({
    data: [{ name: 'Étudiant' }, { name: 'Intervenant' }, { name: 'Administration' }],
  });
  const roleByName = Object.fromEntries(roles.map((r) => [r.name, r]));

  const categories = await prisma.category.createManyAndReturn({
    data: [...SUBJECTS_DFS, ...SUBJECTS_OTHERS].map((name) => ({ name })),
  });
  const categoryByName = Object.fromEntries(categories.map((c) => [c.name, c]));

  const typeEvents = await prisma.typeEvent.createManyAndReturn({
    data: TYPE_EVENTS.map((name) => ({ name })),
  });
  const typeTopics = await prisma.typeTopic.createManyAndReturn({
    data: TYPE_TOPICS.map((name) => ({ name })),
  });
  const typeReports = await prisma.typeReport.createManyAndReturn({
    data: TYPE_REPORTS.map((title) => ({ title })),
  });
  const tags = await prisma.tag.createManyAndReturn({
    data: TAGS.map((name) => ({ name })),
  });

  const degrees = await prisma.degree.createManyAndReturn({
    data: DEGREES.map((name) => ({ name })),
  });
  const degreeByName = Object.fromEntries(degrees.map((d) => [d.name, d]));

  console.log('🏫 Écoles...');
  const schools = await prisma.school.createManyAndReturn({
    data: CITIES.map((city, i) => ({
      name: `MyDigitalSchool ${city}`,
      city,
      microsoftTenantId: `${String(i + 1).padStart(8, '0')}-0000-4000-8000-000000000000`,
    })),
  });
  const schoolByCity = Object.fromEntries(schools.map((s) => [s.city, s]));

  console.log('🔗 LinkDegreeSchool (catalogue par campus)...');
  const linkData: { idDegree: number; idSchool: number }[] = [];
  for (const school of schools) {
    // Campus partiels : ~15 formations ; les autres : les 20
    const offered = PARTIAL_CAMPUSES.has(school.city)
      ? degrees.filter((_, idx) => idx % 4 !== 0) // retire 1 sur 4
      : degrees;
    for (const d of offered) linkData.push({ idDegree: d.id, idSchool: school.id });
  }
  await prisma.linkDegreeSchool.createMany({ data: linkData });

  // Ensemble des formations offertes par campus (pour créer classes/élèves cohérents)
  const offeredByCity: Record<string, number[]> = {};
  for (const l of linkData) {
    const city = schools.find((s) => s.id === l.idSchool)!.city;
    (offeredByCity[city] ??= []).push(l.idDegree);
  }

  console.log('🎓 Classes (ClassGroup)...');
  // Angers : 1 classe "A" pour chaque formation offerte (+ "B" pour DFS).
  // Autres campus : 1 classe "A" pour 4 formations offertes.
  const classIdBySchoolDegree = new Map<string, number>();
  const key = (schoolId: number, degreeId: number) => `${schoolId}:${degreeId}`;

  for (const school of schools) {
    const offered = offeredByCity[school.city] ?? [];
    const isAngers = school.city === 'Angers';
    const degreesForClasses = isAngers ? offered : offered.slice(0, 4);
    for (const degreeId of degreesForClasses) {
      const cg = await prisma.classGroup.create({ data: { name: 'A', idDegree: degreeId } });
      classIdBySchoolDegree.set(key(school.id, degreeId), cg.id);
    }
    // Classe "B" supplémentaire pour le MBA DFS à Angers
    if (isAngers) {
      const dfsId = degreeByName[DEGREE_DFS].id;
      await prisma.classGroup.create({ data: { name: 'B', idDegree: dfsId } });
    }
  }

  console.log('👥 Utilisateurs (élèves, intervenants, administration)...');
  type SeededUser = { id: number; roleName: string; schoolId: number; degreeId?: number; classId?: number };
  const allUsers: SeededUser[] = [];

  // Config volumétrie : Angers riche, autres campus plus léger
  const plan = (city: string) =>
    city === 'Angers'
      ? { students: 45, intervenants: 26, admins: 2 }
      : { students: 6, intervenants: 3, admins: 1 };

  for (const school of schools) {
    const { students, intervenants, admins } = plan(school.city);
    const offered = offeredByCity[school.city] ?? [];
    const classDegrees = [...classIdBySchoolDegree.keys()]
      .filter((k) => k.startsWith(`${school.id}:`))
      .map((k) => Number(k.split(':')[1]));

    // Étudiants
    const studentData = Array.from({ length: students }, () => {
      const { name, surname } = nextName();
      const degreeId = classDegrees[allUsers.length % Math.max(classDegrees.length, 1)] ?? offered[0];
      return {
        name, surname, email: makeEmail(name, surname), password: PLACEHOLDER_PASSWORD,
        idRole: roleByName['Étudiant'].id, idSchool: school.id,
        idClassGroup: classIdBySchoolDegree.get(key(school.id, degreeId)) ?? null,
        _degreeId: degreeId,
      };
    });
    const createdStudents = await prisma.user.createManyAndReturn({
      data: studentData.map(({ _degreeId, ...d }) => d),
    });
    createdStudents.forEach((u, i) =>
      allUsers.push({ id: u.id, roleName: 'Étudiant', schoolId: school.id, degreeId: studentData[i]._degreeId, classId: studentData[i].idClassGroup ?? undefined }),
    );

    // Intervenants
    const intervenantData = Array.from({ length: intervenants }, () => {
      const { name, surname } = nextName();
      return {
        name, surname, email: makeEmail(name, surname), password: PLACEHOLDER_PASSWORD,
        idRole: roleByName['Intervenant'].id, idSchool: school.id,
      };
    });
    const createdIntervenants = await prisma.user.createManyAndReturn({ data: intervenantData });
    createdIntervenants.forEach((u) =>
      allUsers.push({ id: u.id, roleName: 'Intervenant', schoolId: school.id }),
    );

    // Administration
    const adminData = Array.from({ length: admins }, () => {
      const { name, surname } = nextName();
      return {
        name, surname, email: makeEmail(name, surname), password: PLACEHOLDER_PASSWORD,
        idRole: roleByName['Administration'].id, idSchool: school.id,
      };
    });
    const createdAdmins = await prisma.user.createManyAndReturn({ data: adminData });
    createdAdmins.forEach((u) =>
      allUsers.push({ id: u.id, roleName: 'Administration', schoolId: school.id }),
    );
  }

  const studentsBySchool = (schoolId: number) => allUsers.filter((u) => u.roleName === 'Étudiant' && u.schoolId === schoolId);
  const intervenantsBySchool = (schoolId: number) => allUsers.filter((u) => u.roleName === 'Intervenant' && u.schoolId === schoolId);
  const staffBySchool = (schoolId: number) => allUsers.filter((u) => u.roleName !== 'Étudiant' && u.schoolId === schoolId);

  console.log('🪪 Cartes étudiantes...');
  await prisma.studentCard.createMany({
    data: allUsers
      .filter((u) => u.roleName === 'Étudiant')
      .map((u) => ({ number: nextCardNumber(), qrCode: nextQr(), idStudent: u.id })),
  });

  console.log('🧑‍🏫 WorkAt (intervenants + administration ↔ école)...');
  await prisma.workAt.createMany({
    data: allUsers
      .filter((u) => u.roleName !== 'Étudiant')
      .map((u) => ({ idUser: u.id, idSchool: u.schoolId })),
  });

  console.log('📚 BeProfessorFor (dont les 6 matières du M1 DFS à Angers)...');
  const angers = schoolByCity['Angers'];
  const dfsDegreeId = degreeByName[DEGREE_DFS].id;
  const dfsClassId = classIdBySchoolDegree.get(key(angers.id, dfsDegreeId))!;
  const angersIntervenants = intervenantsBySchool(angers.id);
  const professorLinks: { idUser: number; idClassGroup: number; idCategory: number; isReferent: boolean }[] = [];

  SUBJECTS_DFS.forEach((subject, i) => {
    const prof = angersIntervenants[i % angersIntervenants.length];
    professorLinks.push({
      idUser: prof.id, idClassGroup: dfsClassId,
      idCategory: categoryByName[subject].id, isReferent: true,
    });
  });
  // Quelques affectations supplémentaires sur d'autres classes d'Angers
  const otherSubjects = SUBJECTS_OTHERS.slice(0, 8);
  const angersClasses = [...classIdBySchoolDegree.entries()]
    .filter(([k]) => k.startsWith(`${angers.id}:`))
    .map(([, v]) => v)
    .filter((id) => id !== dfsClassId)
    .slice(0, 8);
  angersClasses.forEach((classId, i) => {
    const prof = angersIntervenants[(i + 3) % angersIntervenants.length];
    professorLinks.push({
      idUser: prof.id, idClassGroup: classId,
      idCategory: categoryByName[otherSubjects[i % otherSubjects.length]].id,
      isReferent: i % 2 === 0,
    });
  });
  await prisma.beProfessorFor.createMany({ data: professorLinks, skipDuplicates: true });

  console.log('🅿️  Parkings...');
  const parkingData = schools.flatMap((s) => [
    { name: `Parking ${s.city} - Voitures`, nbMaxPlace: 60, idSchool: s.id },
    { name: `Parking ${s.city} - Vélos`, nbMaxPlace: 25, isFull: s.city === 'Angers', idSchool: s.id },
  ]);
  await prisma.parking.createMany({ data: parkingData });

  console.log('📰 News & Événements...');
  const newsData: any[] = [];
  const eventData: any[] = [];
  for (const school of schools) {
    const authors = staffBySchool(school.id);
    if (!authors.length) continue;
    const a = authors[0];
    newsData.push(
      { title: `Foodtruck de la semaine à ${school.city}`, description: 'Le foodtruck sera présent jeudi midi sur le parvis.', idTypeEvent: typeEvents.find((t) => t.name === 'Foodtruck')!.id, idSchool: school.id, idAuthor: a.id },
      { title: `Afterwork ${school.city}`, description: 'Rejoignez-nous pour l’afterwork de fin de mois.', idTypeEvent: typeEvents.find((t) => t.name === 'Afterworks & soirée')!.id, idSchool: school.id, idAuthor: a.id },
    );
    eventData.push(
      { name: `Tournoi e-sport ${school.city}`, description: 'Tournoi inter-promos sur le campus.', startDate: new Date('2026-10-10T13:00:00Z'), endDate: new Date('2026-10-10T18:00:00Z'), idTypeEvent: typeEvents.find((t) => t.name === 'Tournois sportifs')!.id, idSchool: school.id, idCreator: a.id },
      { name: `Soirée Networking ${school.city}`, description: 'Rencontre avec des professionnels du digital.', startDate: new Date('2026-11-20T18:30:00Z'), idTypeEvent: typeEvents.find((t) => t.name === 'Networking')!.id, idSchool: school.id, idCreator: a.id },
    );
  }
  await prisma.news.createMany({ data: newsData });
  await prisma.event.createMany({ data: eventData });

  console.log('📖 Tutoriels...');
  const tutoAuthors = intervenantsBySchool(angers.id);
  await prisma.tutorial.createMany({
    data: [
      { title: 'Démarrer avec Docker', description: 'Guide pratique DevOps pour le M1 DFS.', isPublished: true, idCategory: categoryByName['DevOps, Docker'].id, idAuthor: tutoAuthors[0].id, idSchool: angers.id },
      { title: 'Architecture hexagonale', description: 'Principes d’architecture logicielle.', isPublished: true, idCategory: categoryByName['Architecture logicielle'].id, idAuthor: tutoAuthors[1 % tutoAuthors.length].id, idSchool: angers.id },
      { title: 'Composants React avancés', description: 'Patterns front-end modernes.', idCategory: categoryByName['Développement front-end avancé'].id, idAuthor: tutoAuthors[2 % tutoAuthors.length].id, idSchool: angers.id },
    ],
  });

  console.log('💬 Forum...');
  const angersStudents = studentsBySchool(angers.id);
  const tagByName = Object.fromEntries(tags.map((t) => [t.name, t]));
  const topic1 = await prisma.forumTopic.create({
    data: { title: 'Recherche alternance développeur', description: 'Quelqu’un a des pistes d’entreprises qui recrutent en dev ?', idAuthor: angersStudents[0].id, idTypeTopic: typeTopics.find((t) => t.name === 'Recherche de stage')!.id },
  });
  const topic2 = await prisma.forumTopic.create({
    data: { title: 'Tutorat Docker', description: 'Je propose une session de tutorat sur Docker.', idAuthor: angersIntervenants[0].id, idTypeTopic: typeTopics.find((t) => t.name === 'Tutorat')!.id },
  });
  await prisma.forumMessage.createMany({
    data: [
      { content: 'Regarde du côté des ESN de la région angevine.', isAnswer: true, idTopic: topic1.id, idAuthor: angersIntervenants[1 % angersIntervenants.length].id },
      { content: 'Merci pour le conseil !', idTopic: topic1.id, idAuthor: angersStudents[0].id },
      { content: 'Super, je m’inscris.', idTopic: topic2.id, idAuthor: angersStudents[1 % angersStudents.length].id },
    ],
  });
  await prisma.linkForumTopicTag.createMany({
    data: [
      { idForumTopic: topic1.id, idTag: tagByName["Recherche d'entreprise"].id },
      { idForumTopic: topic1.id, idTag: tagByName['Dév Web'].id },
      { idForumTopic: topic2.id, idTag: tagByName['DFS'].id },
      { idForumTopic: topic2.id, idTag: tagByName['Entraide'].id },
    ],
  });

  console.log('🚗 Covoiturages...');
  const carpool = await prisma.carpool.create({
    data: { departure: 'Cholet', arrival: 'MyDigitalSchool Angers', nbAvailablePlaces: 2, nbMaxPlaces: 3, startDate: new Date('2026-09-07T07:45:00Z'), idDriver: angersStudents[2 % angersStudents.length].id },
  });
  await prisma.bePassengerFor.createMany({
    data: [
      { idPassenger: angersStudents[3 % angersStudents.length].id, idCarpool: carpool.id },
      { idPassenger: angersStudents[4 % angersStudents.length].id, idCarpool: carpool.id },
    ],
  });

  console.log('🔌 Matériel (beaucoup de multiprises, écrans, HDMI, PC portables)...');
  const equipmentData: any[] = [];
  for (const school of schools) {
    const factor = school.city === 'Angers' ? 4 : 1;
    const counts = { multiprise: 10 * factor, ecran: 3 * factor, hdmi: 6 * factor, pc: 3 * factor };
    for (let i = 0; i < counts.multiprise; i++) equipmentData.push({ title: 'Multiprise 6 ports', serialNumber: nextSerial('MULTI'), receptionDate: new Date('2026-01-15T00:00:00Z'), qrCode: nextQr(), idSchool: school.id });
    for (let i = 0; i < counts.ecran; i++) equipmentData.push({ title: 'Écran 27" Full HD', serialNumber: nextSerial('ECR'), receptionDate: new Date('2026-01-20T00:00:00Z'), qrCode: nextQr(), idSchool: school.id });
    for (let i = 0; i < counts.hdmi; i++) equipmentData.push({ title: 'Câble HDMI 2m', serialNumber: nextSerial('HDMI'), receptionDate: new Date('2026-02-01T00:00:00Z'), qrCode: nextQr(), idSchool: school.id });
    for (let i = 0; i < counts.pc; i++) equipmentData.push({ title: 'PC portable Dell Latitude', serialNumber: nextSerial('PC'), receptionDate: new Date('2026-02-10T00:00:00Z'), qrCode: nextQr(), idSchool: school.id });
  }
  await prisma.equipment.createMany({ data: equipmentData });

  // Un PC d'Angers emprunté par un étudiant (état + historique)
  const angersLaptop = await prisma.equipment.findFirst({
    where: { idSchool: angers.id, title: { contains: 'PC portable' } },
  });
  if (angersLaptop) {
    const borrower = angersStudents[0];
    await prisma.equipment.update({
      where: { id: angersLaptop.id },
      data: { isBorrowed: true, idCurrentBorrower: borrower.id },
    });
    await prisma.beBorrowedBy.create({
      data: { idUser: borrower.id, idEquipment: angersLaptop.id, startBorrowDate: new Date('2026-03-01T09:00:00Z'), endBorrowDate: new Date('2026-03-20T09:00:00Z'), isCurrent: true },
    });
  }

  console.log('🎫 Tickets & 🔔 Notifications...');
  await prisma.ticketReport.createMany({
    data: [
      { title: 'Wifi instable salle B12', description: 'Le wifi coupe régulièrement.', idReporter: angersStudents[5 % angersStudents.length].id, idTypeReport: typeReports.find((t) => t.title === 'Dysfonctionnement')!.id },
      { title: 'Vidéoprojecteur HS', description: 'Le vidéoprojecteur ne s’allume plus.', idReporter: angersStudents[6 % angersStudents.length].id, idTypeReport: typeReports.find((t) => t.title === 'Panne')!.id },
    ],
  });
  await prisma.beNotifiedFor.createMany({
    data: angersStudents.slice(0, 10).map((u, i) => ({
      idUser: u.id, idTypeEvent: typeEvents[i % typeEvents.length].id,
    })),
    skipDuplicates: true,
  });

  // --- Récapitulatif ---
  const counts = await Promise.all([
    prisma.school.count(), prisma.degree.count(), prisma.classGroup.count(),
    prisma.user.count(), prisma.category.count(), prisma.equipment.count(),
    prisma.news.count(), prisma.event.count(),
  ]);
  console.log('✅ Seed terminé :', {
    schools: counts[0], degrees: counts[1], classGroups: counts[2], users: counts[3],
    categories: counts[4], equipments: counts[5], news: counts[6], events: counts[7],
  });
}

main()
  .catch((e) => {
    console.error('❌ Seed échoué:', e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
