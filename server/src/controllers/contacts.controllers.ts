import { Request, Response } from "express";
import { IContact, IContactEdit } from "../interfaces/contact.interfaces";
import { createContactService } from "../services/contacts/create.contact.service";
import { deleteContactService } from "../services/contacts/delete.contactId.service";
import { listUniqueContactService } from "../services/contacts/list.contactId.service";
import { listContactsService } from "../services/contacts/list.contacts.service";
import { patchContactService } from "../services/contacts/patch.contactId.service";

const createContactController = async (req: Request, res: Response) => {
  const userID = req.validatedAuthId;
  const payload: IContact = req.validatedBody;
  const data = await createContactService(payload, userID);
  return res.status(201).json(data);
};

const listContactsController = async (req: Request, res: Response) => {
  const userID = req.validatedAuthId;
  const data = await listContactsService(userID);
  return res.status(200).json(data);
};

const listUniqueContactController = async (req: Request, res: Response) => {
  const contact = req.validatedUniqueContact;
  const data = await listUniqueContactService(contact);
  return res.status(200).json(data);
};

const patchContactController = async (req: Request, res: Response) => {
    const payload: IContactEdit = req.validatedBody;
    const { id } = req.params;
    const data = await patchContactService(payload, id);
    return res.status(200).json(data);
};

const deleteContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await deleteContactService(id);
  return res.status(204).json(data);
};

export {
  createContactController,
  deleteContactController,
  listContactsController,
  listUniqueContactController,
  patchContactController,
};
