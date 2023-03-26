import { prismaClient } from "../../database/prismaClient";
import { IUserEdit } from "../../interfaces/user.interfaces";

const patchUserService = async (payload: IUserEdit, id: string) => {
  const updateUser = await prismaClient.user.update({
    where: { id },
    data: payload,
  });

  delete updateUser.password;
  return updateUser;
};

export { patchUserService };
