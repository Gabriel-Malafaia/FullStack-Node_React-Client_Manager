import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";

const contactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const userId = req.validatedAuthId;

  const contact = await prismaClient.contactUser.findFirst({
    where: {
      userId,
      id,
    },
    include: { contacts: true },
  });

  if (!contact) {
    throw new AppError("Contact or client id in params is not found.", 404);
  }

  req.validatedUniqueContact = contact;
  return next();
};

export { contactExistsMiddleware };
