/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `contacts_users_info` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "contacts_users_info_phone_key" ON "contacts_users_info"("phone");
