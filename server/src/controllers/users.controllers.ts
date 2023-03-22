import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interfaces";
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
  const data = await listUniqueUserService();
  return res.status(200).json(data);
};

const patchUserController = async (req: Request, res: Response) => {
  const data = await patchUserService();
  return res.status(200).json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const data = await deleteUserService();
  return res.status(204);
};

export { createUserController };
