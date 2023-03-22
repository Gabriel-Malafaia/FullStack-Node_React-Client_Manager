import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";
import { IUserDatabase } from "../../interfaces/user.interfaces";

const userIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.validatedAuthId;
  const user: IUserDatabase = await prismaClient.user.findUnique({
    where: { id },
  });

  if (!user?.isAdmin) {
    throw new AppError("Missing authorization admin token.", 401);
  }

  return next();
};

export { userIsAdminMiddleware };
