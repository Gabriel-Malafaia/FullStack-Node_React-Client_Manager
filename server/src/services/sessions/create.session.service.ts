import { IUserSession } from "../../interfaces/user.interfaces";
import { compareSync } from "bcryptjs";
import { AppError } from "../../errors";
import { sign } from "jsonwebtoken";

const createSessionService = async (
  payload: IUserSession,
  comparePassword: string,
  id: string
) => {
  const { password, email } = payload;
  const isEqualPassword = compareSync(password, comparePassword);

  if (!isEqualPassword) {
    throw new AppError("Email or password is invalid.", 401);
  }

  const secretKey = process.env.SECRET_KEY || "S3CR3TK3Y";
  const token = sign({ id }, secretKey, {
    expiresIn: "24h",
    subject: email,
  });

  return { token };
};

export { createSessionService };
