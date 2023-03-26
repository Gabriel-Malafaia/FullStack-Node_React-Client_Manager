import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import StyledErrorMessage from "../../PasswordInput/style";
import { FormControl, Input, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { registerClientContactSchema } from "../../../schemas";
import { useDashContext } from "../../../contexts/DashContext";
import { TextMaskCustom } from "../../MaskedInput";
import {
  IEditContactDialogProps,
  IRegisterClientContactProps,
} from "../../../interfaces/pages/dashboard";

const EditContactDialog = () => {
  const {
    actualContact,
    setActualContact,
    actualDialog,
    setActualDialog,
    editClientContact,
  } = useDashContext();
  const { clientPhone, clientName, clientEmail } = actualContact;

  const formOptions = { resolver: yupResolver(registerClientContactSchema) };
  const {
    register,
    formState: { errors },
    clearErrors,
    setError,
    setValue,
    handleSubmit,
  } = useForm<IRegisterClientContactProps>(formOptions);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, "");
    setValue("phone", newValue);
    setActualContact({ ...actualContact, clientPhone: newValue });

    if (newValue.length == 11) {
      clearErrors("phone");
    } else {
      setError("phone", {
        type: "manual",
        message: "Obrigatório com o mínimo de 11 caracteres.",
      });
    }
  };

  return (
    <Dialog
      open={actualDialog == "editContact"}
      onClose={() => setActualDialog("")}
    >
      <form onSubmit={handleSubmit(editClientContact)}>
        <DialogTitle>Editar contato</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "1rem" }}>
            Para o contato do(a) cliente: {clientName}, basta preencher os
            campos que deseja alterar.
          </DialogContentText>

          <TextField
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            autoFocus
            defaultValue={clientEmail}
            margin="dense"
            label="E-mail"
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
              value={clientPhone}
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
          <Button onClick={() => setActualDialog("")}>Cancelar</Button>
          <Button type="submit">Editar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditContactDialog;
