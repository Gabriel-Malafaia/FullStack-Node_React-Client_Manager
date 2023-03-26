import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/UserContext";
import {
  StyledMainContainer,
  StyledMainContainerLeft,
  StyledMainContainerRight,
} from "./style";

// Componente default da home page (container e logo)

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
