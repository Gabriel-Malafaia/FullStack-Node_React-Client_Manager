import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";
import { IUser } from "../../interfaces/user.interfaces";

const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: IUser = req.validatedBody;
  const { email } = payload;

  const user = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    throw new AppError("User with that email is already registered.");
  }

  return next();
};

export { userExistsMiddleware };
