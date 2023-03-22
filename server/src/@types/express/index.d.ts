declare global {
  namespace Express {
    interface Request {
      validatedBody: IUser;
      //   validatedUser: object | null;
      //   validatedAddress: object;
      //   validatedId: string;
    }
  }
}

export {};
