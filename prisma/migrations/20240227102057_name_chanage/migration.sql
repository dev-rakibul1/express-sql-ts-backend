/*
  Warnings:

  - You are about to drop the column `image` on the `players` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "players" DROP COLUMN "image",
ADD COLUMN     "file" TEXT;
