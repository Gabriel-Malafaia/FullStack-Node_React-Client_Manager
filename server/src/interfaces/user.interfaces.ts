interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAdmin: boolean;
}

interface IUserDatabase {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserSession {
  email: string;
  password: string;
}

export { IUser, IUserSession, IUserDatabase };
