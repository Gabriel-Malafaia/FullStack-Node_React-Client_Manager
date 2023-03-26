import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDashContext } from "../../contexts/DashContext";
import { useForm } from "react-hook-form";
import { editClientSchema, registerClientSchema } from "../../schemas";
import { IClientProps } from "../../interfaces/pages/dashboard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ConfirmDialog from "../ContactsDialog/ConfirmDialog";

const ClientDialog = () => {
  const {
    actualDialog,
    setActualDialog,
    actualContact,
    editClient,
    deleteClient,
  } = useDashContext();

  const formOptions = { resolver: yupResolver(editClientSchema) };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IClientProps>(formOptions);

  return (
    <>
      <ConfirmDialog
        title="Deletar cliente"
        subTitle="Tem certeza que deseja deletar este cliente? você não poderá voltar atrás."
        openDialog={actualDialog == "deleteClient"}
        setOpenDialog={setActualDialog}
        actionFunction={deleteClient}
      />
      <Dialog
        open={actualDialog == "manageClient"}
        onClose={() => setActualDialog("")}
      >
        <form onSubmit={handleSubmit(editClient)}>
          <DialogTitle>Gerenciar cliente</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: "1rem" }}>
              Para atualizar as informações de um cliente, por favor selecione
              os campos que deseja alterar. Caso deseje remover o cliente da sua
              lista de contatos, também é possível fazê-lo.
            </DialogContentText>

            <TextField
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              defaultValue={actualContact.clientName.split(" ")[0]}
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
              defaultValue={actualContact.clientName.split(" ")[1]}
              autoFocus
              margin="dense"
              label="Sobrenome"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setActualDialog("")}>Cancelar</Button>
            <Button
              color="error"
              onClick={() => setActualDialog("deleteClient")}
            >
              Remover Cliente
            </Button>
            <Button type="submit">Salvar alterações</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default ClientDialog;
