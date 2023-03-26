import { ContactUser } from "@prisma/client";

const listUniqueContactService = async (contact: ContactUser) => {
  return contact;
};

export { listUniqueContactService };
