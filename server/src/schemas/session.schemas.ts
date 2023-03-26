import * as yup from "yup";

const createSessionSchema = yup.object().shape({
  email: yup.string().email().max(127).required(),
  password: yup.string().max(127).required(),
});

export { createSessionSchema };
