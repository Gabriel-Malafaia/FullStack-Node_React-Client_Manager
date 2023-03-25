import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/contact-logo.png";
import { useDashContext } from "../../contexts/DashContext";
import Text from "../../styles/Typography";
import { StyledDashHeader, StyledDashHeaderIntern } from "./style";
import LogoutIcon from "@mui/icons-material/Logout";

const DashboardPage = () => {
  const { user } = useDashContext();
  const navigate = useNavigate();
  const { firstName, lastName } = user;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <StyledDashHeader>
        <StyledDashHeaderIntern>
          <div>
            <img src={Logo} alt="" />
            <Text tag="h1" fontSize="text1" color="white">
              Contacts Manager
            </Text>
          </div>
          <Text
            fontSize="text2"
            color="white"
          >{`${firstName} ${lastName}`}</Text>
          <button onClick={handleLogout}>
            <Text fontSize="text2" color="white">
              Sair
            </Text>
            <LogoutIcon />
          </button>
        </StyledDashHeaderIntern>
      </StyledDashHeader>
    </>
  );
};

export default DashboardPage;
