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
import { useEffect, useState } from "react";
import { registerClientContactSchema } from "../../../schemas";
import { useDashContext } from "../../../contexts/DashContext";
import { TextMaskCustom } from "../../MaskedInput";
import { IRegisterClientContactProps } from "../../../interfaces/pages/dashboard";

// Dialog de criação de um contato do cliente.

const CreateContactDialog = () => {
  const [textMask, setTextMask] = useState("");
  const {
    registerClientContact,
    actualContact,
    actualDialog,
    setActualDialog,
  } = useDashContext();
  const { clientName, clientId } = actualContact;

  const formOptions = { resolver: yupResolver(registerClientContactSchema) };
  const {
    register,
    formState: { errors },
    clearErrors,
    setError,
    setValue,
    handleSubmit,
    reset,
  } = useForm<IRegisterClientContactProps>(formOptions);

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
        message: "Obrigatório com o mínimo de 11 caracteres.",
      });
    }
  };

  useEffect(() => {
    reset();
    setTextMask("(00) 00000-0000");
  }, [actualDialog]);

  return (
    <Dialog
      open={actualDialog == "createContact"}
      onClose={() => setActualDialog("")}
    >
      <form onSubmit={handleSubmit(registerClientContact)}>
        <DialogTitle>Cadastrar contato</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: "1rem" }}>
            Para cadastrar um novo contato do(a) respectivo cliente:{" "}
            {clientName}, basta preencher os campos.
          </DialogContentText>

          <TextField
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            autoFocus
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
          <Button onClick={() => setActualDialog("")}>Cancelar</Button>
          <Button type="submit">Cadastrar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateContactDialog;
