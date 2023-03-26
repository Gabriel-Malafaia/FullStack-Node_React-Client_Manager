import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Text from "../../styles/Typography";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";
import { createData, formatPhoneNumber } from "../../service/services";
import { useDashContext } from "../../contexts/DashContext";

// Estrutura de cada linha da tabela proposta na página.

interface IRowProps {
  row: ReturnType<typeof createData>;
  setDialog: React.Dispatch<React.SetStateAction<string>>;
}

const Row = ({ row, setDialog }: IRowProps) => {
  const [open, setOpen] = useState(false);
  const { actualContact, setActualContact } = useDashContext();

  const handleManageClient = () => {
    setDialog("manageClient");
    setActualContact({
      ...actualContact,
      clientId: row.id,
      clientName: row.name,
    });
  };

  const handleCreateClick = () => {
    setDialog("createContact");
    setActualContact({
      ...actualContact,
      clientId: row.id,
      clientName: row.name,
    });
  };

  const handleDeleteClick = (contactId: string) => {
    setActualContact({
      ...actualContact,
      contactId,
    });

    setDialog("deleteContact");
  };

  const handleEditClick = (contactId: string, email: string, phone: string) => {
    setActualContact({
      ...actualContact,
      contactId,
      clientName: row.name,
      clientEmail: email,
      clientPhone: phone,
    });

    setDialog("editContact");
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Text fontSize="text2" color="grey3">
            {row.name}
          </Text>
        </TableCell>
        <TableCell align="right">
          <Text fontSize="text2" color="grey3">
            {row.createdAt}
          </Text>
        </TableCell>
        <TableCell align="right">
          <ManageAccountsIcon
            onClick={handleManageClient}
            sx={{ color: "#1976d2", cursor: "pointer" }}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, position: "relative" }}>
              <AddIcCallIcon
                onClick={handleCreateClick}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: "15px",
                  color: "#1976d2",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
              <Typography variant="h6" gutterBottom component="div">
                Contatos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>E-mail(s)</TableCell>
                    <TableCell>Telefone(s)</TableCell>
                    <TableCell align="right">Opções</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.clientContacts.map(({ email, phone, id }, index) => (
                    <TableRow key={id}>
                      <TableCell component="th" scope="row">
                        {email}
                      </TableCell>
                      <TableCell>{formatPhoneNumber(phone)}</TableCell>
                      <TableCell align="right">
                        <EditIcon
                          sx={{ color: "#1976d2", cursor: "pointer" }}
                          onClick={() => handleEditClick(id, email, phone)}
                        />
                        <DeleteIcon
                          sx={{ color: "#1976d2", cursor: "pointer" }}
                          onClick={() => handleDeleteClick(id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
