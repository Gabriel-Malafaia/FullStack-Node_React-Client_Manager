import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors";

const phoneExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.validatedAuthId;
  const { phone } = req.validatedBody;

  const isPhoneRegistered = await prismaClient.contactUser.findFirst({
    where: {
      userId,
      contacts: {
        some: {
          phone,
        },
      },
    },
    include: { contacts: true },
  });

  if (isPhoneRegistered) {
    throw new AppError(
      "This phone is already registered in your contacts.",
      400
    );
  }
  return next();
};

export { phoneExistsMiddleware };
