import { hashSync } from "bcryptjs";
import * as yup from "yup";

const createUserSchema = yup.object().shape({
  email: yup.string().email().max(127).required(),
  password: yup
    .string()
    .min(6)
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
  phone: yup.string().min(8).max(11).required(),
  isAdmin: yup.boolean().default(false).notRequired(),
});

const editUserSchema = yup.object().shape({
  email: yup.string().email().max(127).notRequired(),
  password: yup
    .string()
    .min(6)
    .max(127)
    .notRequired()
    .transform((value, originalValue) => {
      if (originalValue && originalValue.length > 0) {
        return hashSync(originalValue);
      }

      return value;
    }),
  phone: yup.string().min(8).max(11).notRequired(),
});

export { createUserSchema, editUserSchema };
