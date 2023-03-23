import { prismaClient } from "../../database/prismaClient";

const listUniqueUserService = async (id: string) => {
  const user = await prismaClient.user.findUnique({
    where: { id },
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

  return user;
};

export { listUniqueUserService };
