import { JwtPayload } from "jsonwebtoken";

interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAdmin: boolean;
}

interface IUserEdit {
  email?: string;
  password?: string;
  phone?: string;
}

interface IUserDatabase extends IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserSession {
  email: string;
  password: string;
}

interface IJwtPayload extends JwtPayload {
  id: string;
}

export { IUser, IUserSession, IUserDatabase, IJwtPayload, IUserEdit };
