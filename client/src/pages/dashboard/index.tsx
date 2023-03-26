import Logo from "../../assets/contact-logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import CollapsibleTable from "../../components/DashboardTable";
import { useNavigate } from "react-router-dom";
import { useDashContext } from "../../contexts/DashContext";
import Text from "../../styles/Typography";
import {
  StyledDashContainer,
  StyledDashHeader,
  StyledDashHeaderIntern,
} from "./style";

const DashboardPage = () => {
  const { user } = useDashContext();
  const { firstName, lastName } = user;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledDashContainer>
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
      <CollapsibleTable />
    </StyledDashContainer>
  );
};

export default DashboardPage;
