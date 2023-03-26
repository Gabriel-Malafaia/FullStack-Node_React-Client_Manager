import ilustrationImage from "../../assets/ilustration.png";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  display: flex;
  min-height: 100vh;
`;

const StyledMainContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex: 1;
`;

const StyledMainContainerRight = styled.div`
  width: 100%;
  flex: 1;
  background-image: url(${ilustrationImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 1rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

export {
  StyledMainContainer,
  StyledMainContainerLeft,
  StyledMainContainerRight,
};
