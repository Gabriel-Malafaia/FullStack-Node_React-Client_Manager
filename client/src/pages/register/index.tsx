import LogoComponent from "../../components/Logo";
import Title from "../../components/Title";
import { StyledTextContainer } from "../../components/Title/style";
import TextField from "@mui/material/TextField";
import Text from "../../styles/Typography";
import { StyledFormContainer, StyledRedirect } from "../login/style";
import { StyledFormRegister } from "./style";
import { useForm } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";
import PasswordInput from "../../components/PasswordInput";
import { FormControl, Input, InputLabel } from "@mui/material";
import { TextMaskCustom } from "../../components/MaskedInput";
import { useState } from "react";
import StyledErrorMessage from "../../components/PasswordInput/style";

export interface IRegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  firstName: string;
  lastName: string;
}

const RegisterPage = () => {
  const [textMask, setTextMask] = useState("");

  const formOptions = { resolver: yupResolver(registerSchema) };
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
    setError,
  } = useForm<IRegisterProps>(formOptions);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, "");
    const value = e.target.value;

    setTextMask(value);
    setValue("phone", newValue);

    if (newValue.length == 11) {
      clearErrors("phone");
    } else {
      setError("phone", {
        type: "manual",
        message: "Telefone obrigatório com o mínimo de 11 caracteres.",
      });
    }
  };

  const registerUser = (data: IRegisterProps) => {
    console.log(data);
  };

  return (
    <StyledFormContainer>
      <LogoComponent />
      <Title
        title="Cadastre-se"
        subtitle="Ao se cadastrar na nossa plataforma, você irá ter um acesso multiuso
        para gerenciar os seus contatos!"
      />
      <StyledFormRegister onSubmit={handleSubmit(registerUser)}>
        <TextField
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          fullWidth
          label="Nome"
          variant="standard"
        />

        <TextField
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          fullWidth
          label="Sobrenome"
          variant="standard"
        />

        <FormControl variant="standard">
          <InputLabel
            error={!!errors.phone}
            htmlFor="formatted-text-mask-input"
          >
            Telefone
          </InputLabel>
          <Input
            value={textMask}
            onChange={handleChange}
            error={!!errors.phone}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom as any}
          />
          {!!errors.phone && (
            <StyledErrorMessage>{errors?.phone?.message}</StyledErrorMessage>
          )}
        </FormControl>

        <TextField
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          label="E-mail"
          variant="standard"
        />

        <PasswordInput
          register={{ ...register("password") }}
          error={errors.password}
          inputLabel={"Senha"}
        />

        <PasswordInput
          register={{ ...register("confirmPassword") }}
          error={errors.confirmPassword}
          inputLabel={"Confirmar Senha"}
        />

        <LoadingButton
          type="submit"
          fullWidth
          endIcon={<SendIcon />}
          loading={false}
          loadingPosition="end"
          variant={"contained"}
        >
          Registrar
        </LoadingButton>
      </StyledFormRegister>
      <StyledTextContainer>
        <Text fontSize="text2" color="grey3">
          Já tem uma conta? <StyledRedirect to={"/"}>Entrar</StyledRedirect>
        </Text>
      </StyledTextContainer>
    </StyledFormContainer>
  );
};

export default RegisterPage;
