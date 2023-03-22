import { prismaClient } from "../../database/prismaClient";
import { IUser } from "../../interfaces/user.interfaces";

const createUserService = async (payload: IUser) => {
  const user = await prismaClient.user.create({ data: payload });
  delete user.password;
  
  return user;
};

export { createUserService };
