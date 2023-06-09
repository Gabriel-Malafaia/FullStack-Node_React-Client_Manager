import * as yup from "yup";

// Todas os schemas da aplicação, aplicando as regras de negócio.

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email deve ser válido.")
    .max(127, "Máximo de 127 caracteres.")
    .required("E-mail obrigatório."),
  password: yup
    .string()
    .max(127, "Máximo de 127 caracteres.")
    .required("Senha obrigatória."),
});

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido.")
    .max(127, "Máximo de 127 caracteres.")
    .required("E-mail obrigatório."),
  password: yup
    .string()
    .min(6, "Mínimo de 6 Caracteres.")
    .max(127, "Máximo de 127 caracteres.")
    .required("Senha obrigatória."),
  confirmPassword: yup
    .string()
    .min(6, "Mínimo de 6 Caracteres.")
    .max(127, "Máximo de 127 caracteres.")
    .required("Confirmação obrigatória."),
  firstName: yup
    .string()
    .max(26, "Máximo de 26 caracteres.")
    .required("Nome obrigatório."),
  lastName: yup
    .string()
    .max(26, "Máximo de 26 caracteres.")
    .required("Sobrenome obrigatório."),
  phone: yup
    .string()
    .min(11, "Mínimo de 11 Caracteres.")
    .max(11, "Máximo de 11 caracteres.")
    .required("Telefone obrigatório com o mínimo de 11 caracteres."),
});

const registerClientSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido.")
    .max(127, "Máximo de 127 caracteres.")
    .required("E-mail obrigatório."),
  firstName: yup
    .string()
    .max(26, "Máximo de 26 caracteres.")
    .required("Nome obrigatório."),
  lastName: yup
    .string()
    .max(26, "Máximo de 26 caracteres.")
    .required("Sobrenome obrigatório."),
  phone: yup
    .string()
    .min(11, "Mínimo de 11 Caracteres.")
    .max(11, "Máximo de 11 caracteres.")
    .required("Telefone obrigatório com o mínimo de 11 caracteres."),
});

const registerClientContactSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido.")
    .max(127, "Máximo de 127 caracteres.")
    .required("E-mail obrigatório."),
  phone: yup
    .string()
    .min(11, "Mínimo de 11 Caracteres.")
    .max(11, "Máximo de 11 caracteres.")
    .required("Telefone obrigatório com o mínimo de 11 caracteres."),
});

const editClientSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(26, "Máximo de 26 caracteres.")
    .required("Nome obrigatório."),
  lastName: yup
    .string()
    .max(26, "Máximo de 26 caracteres.")
    .required("Sobrenome obrigatório."),
});

const editProfileSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido.")
    .max(127, "Máximo de 127 caracteres.")
    .required("E-mail obrigatório."),
  phone: yup
    .string()
    .min(11, "Mínimo de 11 Caracteres.")
    .max(11, "Máximo de 11 caracteres.")
    .required("Telefone obrigatório com o mínimo de 11 caracteres."),
  password: yup
    .string()
    .min(6)
    .max(127, "Máximo de 127 caracteres.")
    .notRequired(),
});

export {
  loginSchema,
  registerSchema,
  registerClientSchema,
  registerClientContactSchema,
  editClientSchema,
  editProfileSchema,
};
