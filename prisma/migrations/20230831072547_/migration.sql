/*
  Warnings:

  - Made the column `email` on table `Logins` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Logins` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Logins" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
