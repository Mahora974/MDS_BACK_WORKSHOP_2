# Workshop API

API REST du projet workshop — **NestJS 11** + **Prisma 7** + **PostgreSQL**.

Elle expose un CRUD complet sur l'ensemble du modèle de données (utilisateurs, écoles, actualités, événements, forum, covoiturage, matériel, etc.) et une documentation d'API interactive **Scalar**.

---

## 📚 Documentation de l'API (Scalar)

Une fois l'application démarrée, la documentation interactive est disponible ici :

| Ressource | URL | Description |
|---|---|---|
| **Doc API Scalar** | **http://localhost:40420/reference** | Interface interactive : explorer toutes les routes, voir les schémas, tester les requêtes (« Try it »). |
| Spec OpenAPI (brute) | http://localhost:40420/openapi.json | Document OpenAPI JSON, à importer dans Postman / Insomnia ou une CI. |

> Le port suit la variable `PORT` (défaut de ce projet : **40420**). Remplace l'hôte/port par ceux de ton environnement en déploiement.
>
> La spec est générée automatiquement depuis les contrôleurs et les DTO (plugin `@nestjs/swagger`) : elle reste toujours synchronisée avec le code.

---

## 🧰 Stack technique

- **Runtime** : Node.js 20+ (images Docker) / 22+ (dev local)
- **Framework** : NestJS 11
- **ORM** : Prisma 7 (générateur `prisma-client` en mode CJS, driver adapter `@prisma/adapter-pg`)
- **Base de données** : PostgreSQL (18 via Docker), schéma `app`
- **Validation** : `class-validator` / `class-transformer` (ValidationPipe global)
- **Documentation** : OpenAPI (`@nestjs/swagger`) rendu par **Scalar**
- **Conteneurisation** : Docker (multi-stage) + Docker Compose (+ pgAdmin)

---

## ✅ Prérequis

- **Docker** + **Docker Compose**
- Pour le dev local hors conteneur : **Node.js ≥ 22** et **npm**

---

## ⚙️ Configuration (`.env`)

Copier le modèle puis ajuster :
```bash
cp .env.example .env
```

| Variable | Rôle | Défaut |
|---|---|---|
| `POSTGRES_PORT` | Port PostgreSQL publié sur l'hôte | `40421` |
| `POSTGRES_DB` / `POSTGRES_USER` / `POSTGRES_PASSWORD` | Identifiants de la base | `app_db` / `app_user` / `app_password` |
| `DATABASE_URL` | URL Prisma **côté hôte** (migrate/generate/studio, run local) | `postgresql://app_user:app_password@localhost:40421/app_db?schema=app` |
| `PORT` / `API_PORT` | Port de l'API | `40420` |
| `NODE_ENV` | Environnement | `development` |
| `CORS_ORIGIN` | Origine autorisée CORS | `http://localhost:3000` |
| `JWT_SECRET` / `JWT_REFRESH_SECRET` | Secrets JWT (**à changer**) | `change-me-*` |
| `JWT_ACCESS_EXPIRATION` / `JWT_REFRESH_EXPIRATION` | Durées des tokens | `15m` / `7d` |
| `THROTTLE_TTL` / `THROTTLE_LIMIT` | Rate limiting | `60000` / `100` |
| `PGADMIN_PORT` / `PGADMIN_DEFAULT_EMAIL` / `PGADMIN_DEFAULT_PASSWORD` | pgAdmin | `40422` / `admin@example.com` / `admin` |

---

## 🚀 Démarrage

Stack complète : PostgreSQL + pgAdmin + API.

```bash
cp .env.example .env
docker compose up -d
```
Puis appliquer les migrations sur la base (depuis l'hôte) :
```bash
npx prisma migrate deploy
```

Services disponibles :
| Service | URL |
|---|---|
| API | http://localhost:40420 |
| Doc Scalar | http://localhost:40420/reference |
| pgAdmin | http://localhost:40422 |
| PostgreSQL | `localhost:40421` |

> Développement avec hot-reload en conteneur (build local de l'image `dev`) :
> ```bash
> docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d
> ```


---

## 🗄️ Base de données & Prisma

| Commande | Rôle |
|---|---|
| `npx prisma generate` | (Re)génère le client Prisma. **À relancer après toute modification du `schema.prisma`.** |
| `npx prisma migrate deploy` | Applique les migrations existantes (base vierge / prod). |
| `npx prisma migrate dev --name <nom>` | Crée + applique une nouvelle migration (dev). |
| `npx prisma studio` | Explorateur de données (http://localhost:5555). |

---

## 🏗️ Structure du projet

```
.
├── Dockerfile                       # Multi-stage : dev / build / prod
├── docker-compose.yml               # Stack complète (api ghcr + postgres + pgadmin)
├── docker-compose.dev.yml           # Override dev (build local de l'api, hot-reload)
├── prisma/
│   ├── schema.prisma                # Modèle + règles ON DELETE / defaults
│   └── migrations/
└── src/
    ├── main.ts                      # Bootstrap : ValidationPipe, CORS, filtre Prisma, OpenAPI + Scalar
    ├── app.module.ts                # Enregistrement des 28 modules
    ├── common/
    │   └── prisma-exception.filter.ts   # Erreurs Prisma → HTTP (P2002→409, P2025→404, P2003→409)
    ├── prisma/                      # PrismaModule (global) + PrismaService
    └── modules/<entité>/            # 1 dossier par table
        ├── <entité>.module.ts
        ├── <entité>.controller.ts   # POST / GET / GET :id / PATCH :id / DELETE :id
        ├── <entité>.service.ts      # Accès Prisma
        └── dto/                     # create + update (PartialType), validés
```

**Conventions** :
- Le `PrismaService` est **global** : injectable partout sans réimporter `PrismaModule`.
- Les tables de liaison (clés composites) utilisent leurs clés en paramètres d'URL ; celles sans champ hors-clé n'exposent pas de `PATCH`.
- Toutes les entrées sont validées ; les propriétés non déclarées sont rejetées (`400`).

---

## 📜 Scripts npm

| Script | Description |
|---|---|
| `npm run start:dev` | Démarrage en watch (développement). |
| `npm run start` | Démarrage simple. |
| `npm run build` | Compilation TypeScript vers `dist/`. |
| `npm run start:prod` | Exécute le build de production (`node dist/src/main`). |
| `npm run lint` | ESLint + correction automatique. |
| `npm run format` | Prettier. |
| `npm run test` / `test:e2e` / `test:cov` | Tests unitaires / e2e / couverture. |

---

## 🌐 Aperçu des endpoints

Chaque entité expose (routes en kebab-case) :

- `POST /<ressource>` — créer
- `GET /<ressource>` — lister
- `GET /<ressource>/:id` — détail
- `PATCH /<ressource>/:id` — mettre à jour
- `DELETE /<ressource>/:id` — supprimer

> Exemples : `/users`, `/schools`, `/news`, `/events`, `/tutorials`, `/forum-topics`, `/forum-messages`, `/carpools`, `/equipments`, `/parkings`, `/student-cards`, `/roles`, `/categories`, `/degrees`, `/class-groups`, les tables de liaison (`/work-at`, `/be-passenger-for`, `/be-professor-for`, `/be-borrowed-by`, `/be-notified-for`, `/link-degree-school`, `/link-forum-topic-tag`)…

👉 **La liste exhaustive, les paramètres et les schémas sont dans la doc Scalar : http://localhost:40420/reference**

---

## 🐳 Docker (détail)

- **`Dockerfile`** multi-stage :
  - `dev` — dépendances complètes + `start:dev`
  - `build` — `prisma generate` + `npm run build`
  - `prod` — image légère, `node dist/src/main.js`
- **`docker-compose.yml`** — stack de référence : API (image `ghcr.io/mahora974/mds_back_workshop_2`), PostgreSQL 18, pgAdmin. Le volume `pgdata` est **externe** (`poa-api_pgdata18`) : le créer si besoin avec `docker volume create poa-api_pgdata18`.
- **`docker-compose.dev.yml`** — override pour builder l'API localement avec hot-reload.

---

## 📦 Déploiement

La mise en production est gérée via `docker-compose.yml` (image publiée sur GHCR). Étapes clés côté cible :

1. Renseigner l'environnement (`.env` ou variables du runtime : `POSTGRES_*`, `PORT`, `CORS_ORIGIN`, `JWT_*`, `THROTTLE_*`).
2. `docker compose up -d`
3. Appliquer les migrations : `npx prisma migrate deploy` (ou via un job d'init).
