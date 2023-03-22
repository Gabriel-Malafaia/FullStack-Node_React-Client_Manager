import { NextFunction, Request, Response } from "express";
import { AnyObject } from "yup";
import { AppError } from "../../errors";

const validateSchemaMiddleware =
  (schema: AnyObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.validatedBody = validated;
      return next();
    } catch (err: any) {
      throw new AppError(err.errors, 401);
    }
  };

export default validateSchemaMiddleware;
