import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EditDialogProfile from "./EditDialog";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDashContext } from "../../contexts/DashContext";

// Componente de menu no perfil de usuário ( dashboard ) onde é possível fazer o logout e editar o perfil.

const MenuProfile = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setActualDialog } = useDashContext();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <EditDialogProfile />
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ManageAccountsIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => setActualDialog("editProfile")}>
          Minha conta
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuProfile;
