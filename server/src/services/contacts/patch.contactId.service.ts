import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";
import { IContactEdit } from "../../interfaces/contact.interfaces";

const patchContactService = async (payload: IContactEdit, id: string) => {
  if (!Object.keys(payload).length)
    throw new AppError(
      "Your body is empty, you can edit: firstName or lastName."
    );

  const newContact = await prismaClient.contactUser.update({
    where: { id },
    data: payload,
  });

  return newContact;
};

export { patchContactService };
