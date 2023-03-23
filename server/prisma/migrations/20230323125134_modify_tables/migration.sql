/*
  Warnings:

  - You are about to drop the column `primaryEmail` on the `contacts_users` table. All the data in the column will be lost.
  - You are about to drop the column `primaryPhone` on the `contacts_users` table. All the data in the column will be lost.
  - You are about to drop the column `secondEmail` on the `contacts_users` table. All the data in the column will be lost.
  - You are about to drop the column `secondPhone` on the `contacts_users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contacts_users" DROP COLUMN "primaryEmail",
DROP COLUMN "primaryPhone",
DROP COLUMN "secondEmail",
DROP COLUMN "secondPhone";

-- CreateTable
CREATE TABLE "contacts_info" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(127) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "contacts_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contacts_info" ADD CONSTRAINT "contacts_info_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "contacts_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
