-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "TypeReport" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "TypeReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "serialNumber" VARCHAR(255),
    "receptionDate" DATE NOT NULL,
    "qrCode" VARCHAR(255) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "isBorrowed" BOOLEAN NOT NULL,
    "idCurrentBorrower" INTEGER,
    "idSchool" INTEGER NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeBorrowedBy" (
    "idUser" INTEGER NOT NULL,
    "idEquipment" INTEGER NOT NULL,
    "startBorrowDate" TIMESTAMPTZ NOT NULL,
    "endBorrowDate" TIMESTAMPTZ NOT NULL,
    "isCurrent" BOOLEAN NOT NULL,

    CONSTRAINT "BeBorrowedBy_pkey" PRIMARY KEY ("idUser","idEquipment","startBorrowDate")
);

-- CreateTable
CREATE TABLE "AuthSession" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "sessionTokenHash" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "expiresAt" TIMESTAMPTZ NOT NULL,
    "revokedAt" TIMESTAMPTZ,
    "ipAddress" VARCHAR(45) NOT NULL,
    "userAgent" TEXT NOT NULL,

    CONSTRAINT "AuthSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutorial" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "modifiedAt" TIMESTAMPTZ NOT NULL,
    "idCategory" INTEGER NOT NULL,
    "idAuthor" INTEGER NOT NULL,
    "idSchool" INTEGER NOT NULL,

    CONSTRAINT "Tutorial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BePassengerFor" (
    "idPassenger" INTEGER NOT NULL,
    "idCarpool" INTEGER NOT NULL,

    CONSTRAINT "BePassengerFor_pkey" PRIMARY KEY ("idPassenger","idCarpool")
);

-- CreateTable
CREATE TABLE "ForumTopic" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "modifiedAt" TIMESTAMPTZ NOT NULL,
    "idAuthor" INTEGER NOT NULL,
    "idTypeTopic" INTEGER NOT NULL,

    CONSTRAINT "ForumTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "link" VARCHAR(255),
    "createdDate" TIMESTAMPTZ NOT NULL,
    "modifiedDate" TIMESTAMPTZ NOT NULL,
    "startDate" TIMESTAMPTZ NOT NULL,
    "endDate" TIMESTAMPTZ,
    "idTypeEvent" INTEGER NOT NULL,
    "idSchool" INTEGER NOT NULL,
    "idCreator" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumMessage" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "isAnswer" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "modifiedAt" TIMESTAMPTZ NOT NULL,
    "idTopic" INTEGER NOT NULL,
    "idAuthor" INTEGER NOT NULL,

    CONSTRAINT "ForumMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeTopic" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "TypeTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkForumTopicTag" (
    "idForumTopic" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    CONSTRAINT "LinkForumTopicTag_pkey" PRIMARY KEY ("idForumTopic","idTag")
);

-- CreateTable
CREATE TABLE "TicketReport" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "idReporter" INTEGER NOT NULL,
    "idTypeReport" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "modifiedAt" TIMESTAMPTZ,

    CONSTRAINT "TicketReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkDegreeSchool" (
    "idDegree" INTEGER NOT NULL,
    "idSchool" INTEGER NOT NULL,

    CONSTRAINT "LinkDegreeSchool_pkey" PRIMARY KEY ("idDegree","idSchool")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(125) NOT NULL,
    "surname" VARCHAR(125) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "gridstackLayoutJson" TEXT,
    "image" TEXT,
    "idRole" INTEGER NOT NULL,
    "idSchool" INTEGER NOT NULL,
    "idClassGroup" INTEGER,
    "microsoftUserId" UUID,
    "microsoftSubject" VARCHAR(255),
    "microsoftIssuer" VARCHAR(500),
    "microsoftPreferredUsername" VARCHAR(255),
    "lastLoginAt" TIMESTAMPTZ,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(125) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "microsoftTenantId" UUID NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "modifiedAt" TIMESTAMPTZ NOT NULL,
    "idTypeEvent" INTEGER NOT NULL,
    "idSchool" INTEGER NOT NULL,
    "idAuthor" INTEGER NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Degree" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Degree_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parking" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "nbMaxPlace" SMALLINT NOT NULL,
    "isFull" BOOLEAN NOT NULL,
    "idSchool" INTEGER NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassGroup" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "idDegree" INTEGER NOT NULL,

    CONSTRAINT "ClassGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carpool" (
    "id" SERIAL NOT NULL,
    "departure" VARCHAR(255) NOT NULL,
    "arrival" VARCHAR(255) NOT NULL,
    "nbAvailablePlaces" SMALLINT NOT NULL,
    "nbMaxPlaces" SMALLINT NOT NULL,
    "startDate" TIMESTAMPTZ NOT NULL,
    "idDriver" INTEGER NOT NULL,

    CONSTRAINT "Carpool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeProfessorFor" (
    "idUser" INTEGER NOT NULL,
    "idClassGroup" INTEGER NOT NULL,
    "idCategory" INTEGER NOT NULL,
    "isReferent" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "StudentCard" (
    "id" SERIAL NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "issuedAt" TIMESTAMPTZ NOT NULL,
    "qrCode" VARCHAR(255) NOT NULL,
    "idStudent" INTEGER NOT NULL,

    CONSTRAINT "StudentCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkAt" (
    "idUser" INTEGER NOT NULL,
    "idSchool" INTEGER NOT NULL,

    CONSTRAINT "WorkAt_pkey" PRIMARY KEY ("idUser","idSchool")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeEvent" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "TypeEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeNotifiedFor" (
    "idUser" INTEGER NOT NULL,
    "idTypeEvent" INTEGER NOT NULL,

    CONSTRAINT "BeNotifiedFor_pkey" PRIMARY KEY ("idUser","idTypeEvent")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthSession_sessionTokenHash_key" ON "AuthSession"("sessionTokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "idx_user_1" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "School_microsoftTenantId_key" ON "School"("microsoftTenantId");

-- CreateIndex
CREATE UNIQUE INDEX "BeProfessorFor_idUser_idClassGroup_idCategory_key" ON "BeProfessorFor"("idUser", "idClassGroup", "idCategory");

-- CreateIndex
CREATE UNIQUE INDEX "StudentCard_number_key" ON "StudentCard"("number");

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_idCurrentBorrower_fkey" FOREIGN KEY ("idCurrentBorrower") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeBorrowedBy" ADD CONSTRAINT "BeBorrowedBy_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeBorrowedBy" ADD CONSTRAINT "BeBorrowedBy_idEquipment_fkey" FOREIGN KEY ("idEquipment") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthSession" ADD CONSTRAINT "AuthSession_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tutorial" ADD CONSTRAINT "Tutorial_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tutorial" ADD CONSTRAINT "Tutorial_idAuthor_fkey" FOREIGN KEY ("idAuthor") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tutorial" ADD CONSTRAINT "Tutorial_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BePassengerFor" ADD CONSTRAINT "BePassengerFor_idPassenger_fkey" FOREIGN KEY ("idPassenger") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BePassengerFor" ADD CONSTRAINT "BePassengerFor_idCarpool_fkey" FOREIGN KEY ("idCarpool") REFERENCES "Carpool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumTopic" ADD CONSTRAINT "ForumTopic_idAuthor_fkey" FOREIGN KEY ("idAuthor") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumTopic" ADD CONSTRAINT "ForumTopic_idTypeTopic_fkey" FOREIGN KEY ("idTypeTopic") REFERENCES "TypeTopic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_idTypeEvent_fkey" FOREIGN KEY ("idTypeEvent") REFERENCES "TypeEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_idCreator_fkey" FOREIGN KEY ("idCreator") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumMessage" ADD CONSTRAINT "ForumMessage_idTopic_fkey" FOREIGN KEY ("idTopic") REFERENCES "ForumTopic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumMessage" ADD CONSTRAINT "ForumMessage_idAuthor_fkey" FOREIGN KEY ("idAuthor") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkForumTopicTag" ADD CONSTRAINT "LinkForumTopicTag_idForumTopic_fkey" FOREIGN KEY ("idForumTopic") REFERENCES "ForumTopic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkForumTopicTag" ADD CONSTRAINT "LinkForumTopicTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketReport" ADD CONSTRAINT "TicketReport_idReporter_fkey" FOREIGN KEY ("idReporter") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketReport" ADD CONSTRAINT "TicketReport_idTypeReport_fkey" FOREIGN KEY ("idTypeReport") REFERENCES "TypeReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkDegreeSchool" ADD CONSTRAINT "LinkDegreeSchool_idDegree_fkey" FOREIGN KEY ("idDegree") REFERENCES "Degree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkDegreeSchool" ADD CONSTRAINT "LinkDegreeSchool_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idClassGroup_fkey" FOREIGN KEY ("idClassGroup") REFERENCES "ClassGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_idTypeEvent_fkey" FOREIGN KEY ("idTypeEvent") REFERENCES "TypeEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_idAuthor_fkey" FOREIGN KEY ("idAuthor") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parking" ADD CONSTRAINT "Parking_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassGroup" ADD CONSTRAINT "ClassGroup_idDegree_fkey" FOREIGN KEY ("idDegree") REFERENCES "Degree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carpool" ADD CONSTRAINT "Carpool_idDriver_fkey" FOREIGN KEY ("idDriver") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeProfessorFor" ADD CONSTRAINT "BeProfessorFor_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeProfessorFor" ADD CONSTRAINT "BeProfessorFor_idClassGroup_fkey" FOREIGN KEY ("idClassGroup") REFERENCES "ClassGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeProfessorFor" ADD CONSTRAINT "BeProfessorFor_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentCard" ADD CONSTRAINT "StudentCard_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkAt" ADD CONSTRAINT "WorkAt_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkAt" ADD CONSTRAINT "WorkAt_idSchool_fkey" FOREIGN KEY ("idSchool") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeNotifiedFor" ADD CONSTRAINT "BeNotifiedFor_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeNotifiedFor" ADD CONSTRAINT "BeNotifiedFor_idTypeEvent_fkey" FOREIGN KEY ("idTypeEvent") REFERENCES "TypeEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
