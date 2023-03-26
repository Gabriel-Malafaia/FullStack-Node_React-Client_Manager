import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";
import { IContactEditInfo } from "../../interfaces/contact.interfaces";

const patchContactInfoService = async (
  payload: IContactEditInfo,
  contactId: string
) => {
  if (!Object.keys(payload).length) {
    throw new AppError("Body is empty or with no correct keys.");
  }

  const newInfo = await prismaClient.contactInfo.update({
    where: { id: contactId },
    data: payload,
  });

  return newInfo;
};

export { patchContactInfoService };
