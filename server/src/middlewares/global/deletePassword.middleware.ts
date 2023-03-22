import { IUserDatabase } from "../../interfaces/user.interfaces";

const deletePass = (users: IUserDatabase[]) => {
  return users.map((user) => {
    delete user.password;
    return user;
  });
};

export { deletePass };
