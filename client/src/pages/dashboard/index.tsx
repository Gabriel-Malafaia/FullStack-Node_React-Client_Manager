import Logo from "../../assets/contact-logo.png";
import CollapsibleTable from "../../components/DashboardTable";
import Text from "../../styles/Typography";
import MenuProfile from "../../components/MenuProfile";
import Loading from "../../components/Loading";
import { useDashContext } from "../../contexts/DashContext";
import {
  StyledDashContainer,
  StyledDashHeader,
  StyledDashHeaderIntern,
} from "./style";

const DashboardPage = () => {
  const { user } = useDashContext();
  const { firstName, lastName } = user;

  return (
    <StyledDashContainer>
      <Loading />
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
          <MenuProfile />
        </StyledDashHeaderIntern>
      </StyledDashHeader>
      <CollapsibleTable />
    </StyledDashContainer>
  );
};

export default DashboardPage;
