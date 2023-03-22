import { hashSync } from "bcryptjs";
import * as yup from "yup";

const createUserSchema = yup.object().shape({
  email: yup.string().email().max(127).required(),
  password: yup
    .string()
    .max(127)
    .required()
    .transform((value, originalValue) => {
      if (originalValue && originalValue.length > 0) {
        return hashSync(originalValue);
      }

      return value;
    }),
  firstName: yup.string().max(26).required(),
  lastName: yup.string().max(26).required(),
  phone: yup.string().max(11).required(),
  isAdmin: yup.boolean().default(false).notRequired(),
});

export { createUserSchema };
