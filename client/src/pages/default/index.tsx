import { Outlet } from "react-router-dom";
import {
  StyledMainContainer,
  StyledMainContainerLeft,
  StyledMainContainerRight,
} from "./style";

const DefaultPage = () => {
  return (
    <StyledMainContainer>
      <StyledMainContainerLeft>
        <Outlet />
      </StyledMainContainerLeft>
      <StyledMainContainerRight />
    </StyledMainContainer>
  );
};

export default DefaultPage;
