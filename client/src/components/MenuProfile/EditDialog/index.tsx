import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import StyledErrorMessage from "../../PasswordInput/style";
import { useDashContext } from "../../../contexts/DashContext";
import { FormControl, Input, InputLabel } from "@mui/material";
import { TextMaskCustom } from "../../MaskedInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { editProfileSchema } from "../../../schemas";
import PasswordInput from "../../PasswordInput";
import { IEditProfileProps } from "../../../interfaces/pages/dashboard";

const EditDialogProfile = () => {
  const { actualDialog, setActualDialog, user, editProfile } = useDashContext();
  const { email, phone } = user;
  const [textMask, setTextMask] = useState(phone);

  const formOptions = { resolver: yupResolver(editProfileSchema) };
  const {
    register,
    formState: { errors },
    clearErrors,
    setError,
    setValue,
    handleSubmit,
  } = useForm<IEditProfileProps>(formOptions);

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
    <Dialog
      open={actualDialog == "editProfile"}
      onClose={() => setActualDialog("")}
    >
      <form onSubmit={handleSubmit(editProfile)}>
        <DialogTitle>Informações do seu perfil.</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "1rem" }}>
            Basta mudar algum campo para alterar seus dados, se não deseja mudar
            o campo "senha", basta não alterar.
          </DialogContentText>

          <TextField
            defaultValue={email}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            autoFocus
            margin="dense"
            label="E-mail"
            type="email"
            fullWidth
            variant="standard"
          />

          <FormControl margin="dense" fullWidth variant="standard">
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

          <PasswordInput
            error={errors.password}
            inputLabel={"Senha"}
            register={{ ...register("password") }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setActualDialog("")}>Cancelar</Button>
          <Button type="submit">Salvar alterações</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditDialogProfile;
