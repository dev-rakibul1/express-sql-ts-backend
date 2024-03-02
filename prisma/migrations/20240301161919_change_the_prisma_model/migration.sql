/*
  Warnings:

  - You are about to drop the `players` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "players";

-- DropEnum
DROP TYPE "PlayerType";

-- CreateTable
CREATE TABLE "dancers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "danceStyle" TEXT NOT NULL,
    "experienceLevel" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "file" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dancers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dancers_email_key" ON "dancers"("email");
