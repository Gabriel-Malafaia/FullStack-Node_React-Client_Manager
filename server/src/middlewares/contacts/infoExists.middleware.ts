import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";

const infoExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { contact_id } = req.params;
  const userId = req.validatedAuthId;

  const info = await prismaClient.contactUser.findFirst({
    where: { userId, contacts: { some: { id: contact_id } } },
  });

  if (!info) {
    throw new AppError("Contact information is not found.", 404);
  }

  return next();
};

export { infoExistsMiddleware };
