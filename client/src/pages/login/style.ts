import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  animation: fadeInLeft;
  animation-duration: 1s;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledRedirect = styled(Link)`
  color: var(--color-secondary);
`;

export { StyledFormContainer, StyledForm, StyledRedirect };
