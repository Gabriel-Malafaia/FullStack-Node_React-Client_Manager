import { prismaClient } from "../../database/prismaClient";
import { deletePass } from "../../middlewares/global/deletePassword.middleware";

const listUsersService = async () => {
  const usersDatabase = await prismaClient.user.findMany();
  return deletePass(usersDatabase);
};

export { listUsersService };
