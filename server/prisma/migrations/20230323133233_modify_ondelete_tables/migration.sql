-- DropForeignKey
ALTER TABLE "contacts_users" DROP CONSTRAINT "contacts_users_user_id_fkey";

-- DropForeignKey
ALTER TABLE "contacts_users_info" DROP CONSTRAINT "contacts_users_info_client_id_fkey";

-- AddForeignKey
ALTER TABLE "contacts_users" ADD CONSTRAINT "contacts_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts_users_info" ADD CONSTRAINT "contacts_users_info_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "contacts_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
