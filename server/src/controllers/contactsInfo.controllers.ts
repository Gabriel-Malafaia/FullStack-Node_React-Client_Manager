import { Request, Response } from "express";
import { IContactEditInfo, IContactInfo } from "../interfaces/contact.interfaces";
import { createContactInfoService } from "../services/contactsInfo/create.contactInfo.service";
import { deleteContactInfoService } from "../services/contactsInfo/delete.contactInfo.service";
import { patchContactInfoService } from "../services/contactsInfo/patch.contactInfo.service";

const createContactInfoController = async (req: Request, res: Response) => {
  const payload: IContactInfo = req.validatedBody;
  const { id } = req.params;

  const data = await createContactInfoService(payload, id);
  return res.status(201).json(data);
};

const patchContactInfoController = async (req: Request, res: Response) => {
    const payload: IContactEditInfo = req.validatedBody;
    const { contact_id } = req.params;
    const data = await patchContactInfoService(payload, contact_id);
    return res.status(200).json(data);
};

const deleteContactInfoController = async (req: Request, res: Response) => {
  const { contact_id } = req.params;
  const data = await deleteContactInfoService(contact_id);
  return res.status(204).json(data);
};

export {
  createContactInfoController,
  patchContactInfoController,
  deleteContactInfoController,
};
