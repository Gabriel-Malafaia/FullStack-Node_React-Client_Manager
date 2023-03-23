import { prismaClient } from "../../database/prismaClient";

const deleteContactInfoService = async (id: string) => {
  await prismaClient.contactInfo.delete({ where: { id } });
  return;
};

export { deleteContactInfoService };
