import styled from "@emotion/styled";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const StyledTableContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;

  padding: 10rem 1rem 2rem 1rem;
`;

const StyledAddCircle = styled(AddCircleIcon)`
  position: absolute;
  top: 4rem;
  right: 1rem;
  font-size: 3rem;
  color: var(--color-primary);
  cursor: pointer;
`;

const StyledIlustration = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 4rem;

  img {
    width: 35%;
  }
`;

export { StyledTableContainer, StyledAddCircle, StyledIlustration };
