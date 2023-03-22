import { prismaClient } from "../../database/prismaClient";

const deleteUserService = async (id: string) => {
  await prismaClient.user.delete({ where: { id } });
  return;
};

export { deleteUserService };
