import { prismaClient } from "../../database/prismaClient";

const listContactsService = async (userId: string) => {
  const contacts = await prismaClient.contactUser.findMany({
    where: { userId },
    include: { contacts: true },
  });

  return contacts;
};

export { listContactsService };
