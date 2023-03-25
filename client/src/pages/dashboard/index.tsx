import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDashContext } from "../../contexts/DashContext";

const DashboardPage = () => {
  const { user } = useDashContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <h1>
        Bem vindo(a) {user.firstName} {user.lastName}
      </h1>
      <Button onClick={handleLogout}>Sair</Button>
    </>
  );
};

export default DashboardPage;
