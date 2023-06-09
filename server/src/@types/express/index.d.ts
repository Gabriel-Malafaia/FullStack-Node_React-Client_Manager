import { ContactUser } from "@prisma/client";
import { IUser, IUserDatabase } from "../../interfaces/user.interfaces";

declare global {
  namespace Express {
    interface Request {
      validatedBody: IUser;
      validatedUser: IUserDatabase | null;
      validatedAuthId: string;
      validatedUserParam: IUserDatabase
      validatedUniqueContact: ContactUser
    }
  }
}

export {};
