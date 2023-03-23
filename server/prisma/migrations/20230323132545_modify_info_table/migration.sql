/*
  Warnings:

  - You are about to drop the `contacts_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "contacts_info" DROP CONSTRAINT "contacts_info_client_id_fkey";

-- DropTable
DROP TABLE "contacts_info";

-- CreateTable
CREATE TABLE "contacts_users_info" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(127) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "contacts_users_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contacts_users_info" ADD CONSTRAINT "contacts_users_info_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "contacts_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
