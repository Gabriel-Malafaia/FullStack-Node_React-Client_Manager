import { prismaClient } from "../../database/prismaClient";
import { IContact } from "../../interfaces/contact.interfaces";

const createContactService = async (payload: IContact, userId: string) => {
  const { email, phone, firstName, lastName } = payload;
  const data = { firstName, lastName, userId };
  const contact = await prismaClient.contactUser.create({ data });

  const dataInfo = { email, phone, clientId: contact.id };
  await prismaClient.contactInfo.create({ data: dataInfo });

  return contact;
};

export { createContactService };
