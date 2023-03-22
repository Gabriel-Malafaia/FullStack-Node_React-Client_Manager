import { prismaClient } from "../../database/prismaClient";

const listUniqueUserService = async (id: string) => {
  const user = await prismaClient.user.findUnique({ where: { id } });
  delete user.password;
  return user;
};

export { listUniqueUserService };
