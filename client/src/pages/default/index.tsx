import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/UserContext";
import {
  StyledMainContainer,
  StyledMainContainerLeft,
  StyledMainContainerRight,
} from "./style";

const DefaultPage = () => {
  return (
    <UserContextProvider>
      <StyledMainContainer>
        <StyledMainContainerLeft>
          <Outlet />
        </StyledMainContainerLeft>
        <StyledMainContainerRight />
      </StyledMainContainer>
    </UserContextProvider>
  );
};

export default DefaultPage;
