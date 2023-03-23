import { prismaClient } from "../../database/prismaClient";

const deleteContactService = async (id: string) => {
  await prismaClient.contactUser.delete({ where: { id } });
  return;
};

export { deleteContactService };
