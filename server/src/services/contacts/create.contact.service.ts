import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";
import { IContact } from "../../interfaces/contact.interfaces";

const createContactService = async (payload: IContact, userId: string) => {
  const { email, phone, firstName, lastName } = payload;

  const isPhoneRegistered = await prismaClient.contactUser.findFirst({
    where: {
      userId,
      contacts: {
        some: {
          phone,
        },
      },
    },
    include: { contacts: true },
  });

  if (isPhoneRegistered) {
    throw new AppError(
      "This phone is already registered in your contacts.",
      400
    );
  }

  const data = { firstName, lastName, userId };
  const contact = await prismaClient.contactUser.create({ data });
  const dataInfo = { email, phone, clientId: contact.id };
  await prismaClient.contactInfo.create({ data: dataInfo });

  return contact;
};

export { createContactService };
