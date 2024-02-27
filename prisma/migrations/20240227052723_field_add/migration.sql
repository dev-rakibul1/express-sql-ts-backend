/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `players` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `active` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PlayerType" AS ENUM ('REGULAR', 'IRREGULAR');

-- AlterTable
ALTER TABLE "players" ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "type" "PlayerType" NOT NULL,
ADD COLUMN     "upload_images" TEXT,
ALTER COLUMN "goals" DROP NOT NULL,
ALTER COLUMN "assist" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "players_email_key" ON "players"("email");
