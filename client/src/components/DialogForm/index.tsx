import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import StyledErrorMessage from "../PasswordInput/style";
import { useDashContext } from "../../contexts/DashContext";
import { FormControl, Input, InputLabel } from "@mui/material";
import { TextMaskCustom } from "../MaskedInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { registerClientSchema } from "../../schemas";
import { IClientProps } from "../../interfaces/pages/dashboard";

export default function FormDialog() {
  const [textMask, setTextMask] = useState("");
  const { openDialog, setOpenDialog } = useDashContext();
  const { registerClient } = useDashContext();

  const formOptions = { resolver: yupResolver(registerClientSchema) };
  const {
    register,
    formState: { errors },
    clearErrors,
    setError,
    setValue,
    handleSubmit,
  } = useForm<IClientProps>(formOptions);

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
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <form onSubmit={handleSubmit(registerClient)}>
        <DialogTitle>Cadastrar Cliente</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "1rem" }}>
            Para cadastrar um novo cliente, basta preencher os campos.
          </DialogContentText>

          <TextField
            {...register("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            variant="standard"
          />

          <TextField
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            autoFocus
            margin="dense"
            label="Sobrenome"
            fullWidth
            variant="standard"
          />

          <TextField
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button type="submit">Cadastrar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
