import { prismaClient } from "../../database/prismaClient";

const listUsersService = async () => {
  const usersDatabase = await prismaClient.user.findMany({
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      isAdmin: true,
      createdAt: true,
      updatedAt: true,
      password: false,
    },
  });

  return usersDatabase;
};

export { listUsersService };
