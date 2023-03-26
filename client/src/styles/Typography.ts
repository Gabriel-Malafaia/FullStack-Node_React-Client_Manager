import styled from "styled-components";
import setColors from "./components/Colors";
import setFontSize from "./components/FontSize";
import TitleComponent from "./components/Typography";

// Componente personalizado de tipografia.

const Text = styled(TitleComponent)`
  color: ${({ color }) => setColors(color)};
  ${({ fontSize }) => setFontSize(fontSize)};
`;

export default Text;
