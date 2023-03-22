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
  const { originalUrl: path } = req;

  const user = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });

  if (user && path == "/users") {
    throw new AppError("User with that email is already registered.", 409);
  }

  if (!user && path == "/sessions") {
    throw new AppError("Email or password is invalid.", 401);
  }

  req.validatedUser = user;
  return next();
};

export { userExistsMiddleware };
