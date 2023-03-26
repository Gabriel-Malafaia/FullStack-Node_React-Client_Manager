import { prismaClient } from "../../database/prismaClient";
import { IContactInfo } from "../../interfaces/contact.interfaces";

const createContactInfoService = async (
  payload: IContactInfo,
  clientId: string
) => {
  const { email, phone } = payload;
  const data = { email, phone, clientId };
  const contact = await prismaClient.contactInfo.create({ data });
  return contact;
};

export { createContactInfoService };
