import Text from "../../styles/Typography";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import LogoComponent from "../../components/Logo";
import Title from "../../components/Title";
import PasswordInput from "../../components/PasswordInput";
import { StyledForm, StyledFormContainer, StyledRedirect } from "./style";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginProps } from "../../interfaces/pages/login";
import { StyledTextContainer } from "../../components/Title/style";
import { useHomeContext } from "../../contexts/UserContext";

const LoginPage = () => {
  const { loginUser, loading } = useHomeContext();

  const formOptions = { resolver: yupResolver(loginSchema) };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginProps>(formOptions);

  return (
    <StyledFormContainer>
      <LogoComponent />
      <Title
        title=" Acesse a plataforma"
        subtitle="Faça login ou registre-se para começar a gerenciar seus contatos."
      />
      <StyledForm onSubmit={handleSubmit(loginUser)}>
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
        <LoadingButton
          type="submit"
          fullWidth
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Login
        </LoadingButton>
      </StyledForm>
      <StyledTextContainer>
        <Text fontSize="text2" color="grey3">
          Ainda não tem uma conta?{" "}
          <StyledRedirect to={"/register"}>Registre-se</StyledRedirect>
        </Text>
      </StyledTextContainer>
    </StyledFormContainer>
  );
};

export default LoginPage;
