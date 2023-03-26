import styled from "styled-components";

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 380px;

  @media (max-width: 700px) {
    max-width: none;
  }
`;

export { StyledTextContainer };
