-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(127) NOT NULL,
    "firstName" VARCHAR(26) NOT NULL,
    "lastName" VARCHAR(26) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts_users" (
    "id" TEXT NOT NULL,
    "primaryEmail" VARCHAR(127) NOT NULL,
    "secondEmail" VARCHAR(127),
    "firstName" VARCHAR(26) NOT NULL,
    "lastName" VARCHAR(26) NOT NULL,
    "primaryPhone" VARCHAR(11) NOT NULL,
    "secondPhone" VARCHAR(11),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "contacts_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "contacts_users" ADD CONSTRAINT "contacts_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
