-- Aligne les actions ON DELETE sur la politique "mix raisonné" :
-- Cascade sur les tables de liaison / enfants possédés. Le reste reste en RESTRICT
-- (référentiels + contenu à auteur NOT NULL) ou SET NULL (FK nullable), déjà en place.

-- BeBorrowedBy
ALTER TABLE "BeBorrowedBy" DROP CONSTRAINT "BeBorrowedBy_idUser_fkey";
ALTER TABLE "BeBorrowedBy" ADD CONSTRAINT "BeBorrowedBy_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "BeBorrowedBy" DROP CONSTRAINT "BeBorrowedBy_idEquipment_fkey";
ALTER TABLE "BeBorrowedBy" ADD CONSTRAINT "BeBorrowedBy_idEquipment_fkey" FOREIGN KEY ("idEquipment") REFERENCES "Equipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AuthSession
ALTER TABLE "AuthSession" DROP CONSTRAINT "AuthSession_idUser_fkey";
ALTER TABLE "AuthSession" ADD CONSTRAINT "AuthSession_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- BePassengerFor
ALTER TABLE "BePassengerFor" DROP CONSTRAINT "BePassengerFor_idPassenger_fkey";
ALTER TABLE "BePassengerFor" ADD CONSTRAINT "BePassengerFor_idPassenger_fkey" FOREIGN KEY ("idPassenger") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "BePassengerFor" DROP CONSTRAINT "BePassengerFor_idCarpool_fkey";
ALTER TABLE "BePassengerFor" ADD CONSTRAINT "BePassengerFor_idCarpool_fkey" FOREIGN KEY ("idCarpool") REFERENCES "Carpool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ForumMessage (messages détruits avec le topic)
ALTER TABLE "ForumMessage" DROP CONSTRAINT "ForumMessage_idTopic_fkey";
ALTER TABLE "ForumMessage" ADD CONSTRAINT "ForumMessage_idTopic_fkey" FOREIGN KEY ("idTopic") REFERENCES "ForumTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- LinkForumTopicTag
ALTER TABLE "LinkForumTopicTag" DROP CONSTRAINT "LinkForumTopicTag_idForumTopic_fkey";
ALTER TABLE "LinkForumTopicTag" ADD CONSTRAINT "LinkForumTopicTag_idForumTopic_fkey" FOREIGN KEY ("idForumTopic") REFERENCES "ForumTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "LinkForumTopicTag" DROP CONSTRAINT "LinkForumTopicTag_idTag_fkey";
ALTER TABLE "LinkForumTopicTag" ADD CONSTRAINT "LinkForumTopicTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- LinkDegreeSchool
ALTER TABLE "LinkDegreeSchool" DROP CONSTRAINT "LinkDegreeSchool_idDegree_fkey";
ALTER TABLE "LinkDegreeSchool" ADD CONSTRAINT "LinkDegreeSchool_idDegree_fkey" FOREIGN KEY ("idDegree") REFERENCES "Degree"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "LinkDegreeSchool" DROP CONSTRAINT "LinkDegreeSchool_idSchool_fkey";
ALTER TABLE "LinkDegreeSchool" ADD CONSTRAINT "LinkDegreeSchool_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- BeProfessorFor
ALTER TABLE "BeProfessorFor" DROP CONSTRAINT "BeProfessorFor_idUser_fkey";
ALTER TABLE "BeProfessorFor" ADD CONSTRAINT "BeProfessorFor_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "BeProfessorFor" DROP CONSTRAINT "BeProfessorFor_idClassGroup_fkey";
ALTER TABLE "BeProfessorFor" ADD CONSTRAINT "BeProfessorFor_idClassGroup_fkey" FOREIGN KEY ("idClassGroup") REFERENCES "ClassGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "BeProfessorFor" DROP CONSTRAINT "BeProfessorFor_idCategory_fkey";
ALTER TABLE "BeProfessorFor" ADD CONSTRAINT "BeProfessorFor_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- StudentCard
ALTER TABLE "StudentCard" DROP CONSTRAINT "StudentCard_idStudent_fkey";
ALTER TABLE "StudentCard" ADD CONSTRAINT "StudentCard_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- WorkAt
ALTER TABLE "WorkAt" DROP CONSTRAINT "WorkAt_idUser_fkey";
ALTER TABLE "WorkAt" ADD CONSTRAINT "WorkAt_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "WorkAt" DROP CONSTRAINT "WorkAt_idSchool_fkey";
ALTER TABLE "WorkAt" ADD CONSTRAINT "WorkAt_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- BeNotifiedFor
ALTER TABLE "BeNotifiedFor" DROP CONSTRAINT "BeNotifiedFor_idUser_fkey";
ALTER TABLE "BeNotifiedFor" ADD CONSTRAINT "BeNotifiedFor_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "BeNotifiedFor" DROP CONSTRAINT "BeNotifiedFor_idTypeEvent_fkey";
ALTER TABLE "BeNotifiedFor" ADD CONSTRAINT "BeNotifiedFor_idTypeEvent_fkey" FOREIGN KEY ("idTypeEvent") REFERENCES "TypeEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
