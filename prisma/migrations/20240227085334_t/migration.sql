/*
  Warnings:

  - Changed the type of `active` on the `players` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "players" DROP COLUMN "active",
ADD COLUMN     "active" BOOLEAN NOT NULL;
