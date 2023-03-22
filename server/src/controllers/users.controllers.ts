import { Request, Response } from "express";
import { IUser, IUserEdit } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/create.user.service";
import { listUniqueUserService } from "../services/users/list.userId.service";
import { listUsersService } from "../services/users/list.users.service";
import { patchUserService } from "../services/users/patch.userId.service";
import { deleteUserService } from "../services/users/delete.userId.service";

const createUserController = async (req: Request, res: Response) => {
  const payload: IUser = req.validatedBody;
  const data = await createUserService(payload);
  return res.status(201).json(data);
};

const listUsersController = async (req: Request, res: Response) => {
  const data = await listUsersService();
  return res.status(200).json(data);
};

const listUniqueUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await listUniqueUserService(id);
  return res.status(200).json(data);
};

const patchUserController = async (req: Request, res: Response) => {
  const payload: IUserEdit = req.validatedBody;
  const { id } = req.params;
  const data = await patchUserService(payload, id);
  return res.status(200).json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await deleteUserService(id);
  return res.status(204).json(data);
};

export {
  createUserController,
  listUsersController,
  listUniqueUserController,
  patchUserController,
  deleteUserController,
};
