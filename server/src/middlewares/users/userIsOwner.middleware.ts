import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";

const userIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.validatedAuthId;
  const idParam = req.validatedUserParam.id;

  if (id == idParam) {
    return next();
  }

  const user = await prismaClient.user.findUnique({ where: { id } });

  if (user.isAdmin) {
    return next();
  }

  throw new AppError("You are not account owner or admin user.", 401);
};

export { userIsOwnerMiddleware };
