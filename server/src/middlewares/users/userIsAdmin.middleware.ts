import { NextFunction, Request, Response } from "express";

const UserIsAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = req.validatedBody
  
  return next();
};

export { UserIsAdminMiddleware };
