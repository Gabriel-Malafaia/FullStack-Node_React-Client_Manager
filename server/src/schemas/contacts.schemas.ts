import * as yup from "yup";

const createContactSchema = yup.object().shape({
  firstName: yup.string().max(26).required(),
  lastName: yup.string().max(26).required(),
  email: yup.string().email().max(127).required(),
  phone: yup.string().min(8).max(11).required(),
});

const editContactSchema = yup.object().shape({
  firstName: yup.string().max(26).notRequired(),
  lastName: yup.string().max(26).notRequired(),
});

const createInfoSchema = yup.object().shape({
  email: yup.string().email().max(127).required(),
  phone: yup.string().min(8).max(11).required(),
});

const editInfoSchema = yup.object().shape({
  email: yup.string().email().max(127).notRequired(),
  phone: yup.string().min(8).max(11).notRequired(),
});

export {
  createContactSchema,
  editContactSchema,
  createInfoSchema,
  editInfoSchema,
};
