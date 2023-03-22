import { IUser } from "../../interfaces/user.interfaces";

declare global {
  namespace Express {
    interface Request {
      validatedBody: IUser;
      validatedUser: IUserDatabase | null;
    }
  }
}

export {};
