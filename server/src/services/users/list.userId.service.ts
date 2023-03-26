import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";

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
      contacts: true
    },
  });

  if(!user) {
    throw new AppError('User with this token authorization not found.')
  }

  return user;
};

export { listUniqueUserService };
