import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/create.user.service";


const createUserController = async (req: Request, res: Response) => {
  const payload: IUser = req.validatedBody
  const data = await createUserService(payload);
  return res.status(201).json(data);
};

export { createUserController };
