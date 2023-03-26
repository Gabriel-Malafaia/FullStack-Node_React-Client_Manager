import LogoComponent from "../../components/Logo";
import Title from "../../components/Title";
import TextField from "@mui/material/TextField";
import Text from "../../styles/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import PasswordInput from "../../components/PasswordInput";
import StyledErrorMessage from "../../components/PasswordInput/style";
import { StyledTextContainer } from "../../components/Title/style";
import { StyledFormContainer, StyledRedirect } from "../login/style";
import { StyledFormContainerRegister, StyledFormRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";
import { FormControl, Input, InputLabel } from "@mui/material";
import { TextMaskCustom } from "../../components/MaskedInput";
import { useState } from "react";
import { IRegisterProps } from "../../interfaces/pages/register";
import { useHomeContext } from "../../contexts/UserContext";

const RegisterPage = () => {
  const [textMask, setTextMask] = useState("");
  const { loading, registerUser } = useHomeContext();

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

  return (
    <StyledFormContainerRegister>
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
          loading={loading}
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
    </StyledFormContainerRegister>
  );
};

export default RegisterPage;
