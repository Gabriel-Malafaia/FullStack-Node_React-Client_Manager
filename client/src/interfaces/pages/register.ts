export interface IRegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  firstName: string;
  lastName: string;
}

export interface IRegisterPropsFunc {
  email: string;
  password: string;
  confirmPassword?: string;
  phone: string;
  firstName: string;
  lastName: string;
}
