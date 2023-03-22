import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";

const userIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!id) {
    throw new AppError("This route needs id params.", 401);
  }

  const user = await prismaClient.user.findUnique({ where: { id } });

  if (!user) {
    throw new AppError("User not found.", 404);
  }

  req.validatedUserParam = user;
  return next();
};

export { userIdExistsMiddleware };
