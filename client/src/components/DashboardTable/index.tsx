import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormDialog from "../DialogForm";
import Row from "../DashboardTableRow";
import ConfirmDialog from "../ContactsDialog/ConfirmDialog";
import CreateContactDialog from "../ContactsDialog/Create";
import { StyledAddCircle, StyledTableContainer } from "./style";
import { useDashContext } from "../../contexts/DashContext";
import { createData, formatDate } from "../../service/services";
import EditContactDialog from "../ContactsDialog/Edit";

const CollapsibleTable = () => {
  const {
    setOpenDialog,
    contacts,
    deleteClientContact,
    actualDialog,
    setActualDialog,
  } = useDashContext();
  const rows = contacts?.map(
    ({ firstName, lastName, createdAt, contacts, id }) =>
      createData(
        `${firstName} ${lastName}`,
        formatDate(createdAt),
        contacts,
        id
      )
  );

  return (
    <StyledTableContainer>
      <ConfirmDialog
        title="Deletar contato"
        subTitle="Tem certeza que deseja deletar este contato? você não poderá voltar atrás."
        openDialog={actualDialog == "deleteContact"}
        setOpenDialog={setActualDialog}
        actionFunction={deleteClientContact}
      />

      <CreateContactDialog />

      <EditContactDialog />
      <FormDialog />
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 1400, position: "relative" }}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Nome do cliente</TableCell>
              <TableCell align="right">Data de Criação</TableCell>
              <TableCell align="right">Gerenciar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <Row
                setDialog={setActualDialog}
                key={row.name + index}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledAddCircle onClick={() => setOpenDialog(true)} />
    </StyledTableContainer>
  );
};

export default CollapsibleTable;
