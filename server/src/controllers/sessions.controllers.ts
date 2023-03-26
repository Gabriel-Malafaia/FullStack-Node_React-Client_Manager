import { Request, Response } from "express";
import { IUserDatabase, IUserSession } from "../interfaces/user.interfaces";
import { createSessionService } from "../services/sessions/create.session.service";

const createSessionController = async (req: Request, res: Response) => {
  const payload: IUserSession = req.validatedBody;
  const { password, id }: IUserDatabase = req.validatedUser;

  const data = await createSessionService(payload, password, id);
  return res.status(200).json(data);
};

export { createSessionController };
