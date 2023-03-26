import styled from "styled-components";

const StyledDashContainer = styled.div`
`;

const StyledDashHeaderIntern = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 3rem;
      box-shadow: 1px 2px 20px 2px white;
      border-radius: 50%;
    }

    @media (max-width: 425px) {
      h1 {
        display: none;
      }
    }
  }

  button {
    border: 1px solid whitesmoke;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 18px;
      color: white;
    }
  }
`;

const StyledDashHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid grey;
  background-color: var(--color-primary);
`;

export { StyledDashHeader, StyledDashHeaderIntern, StyledDashContainer };
