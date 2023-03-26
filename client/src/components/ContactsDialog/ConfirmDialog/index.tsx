import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDashContext } from "../../../contexts/DashContext";
import { IConfirmDialog } from "../../../interfaces/pages/dashboard";

export default function ConfirmDialog({
  title,
  subTitle,
  openDialog,
  setOpenDialog,
  actionFunction,
}: IConfirmDialog) {
  return (
    <>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog('')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subTitle}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog('')}>Cancelar</Button>
          <Button onClick={() => actionFunction()} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
