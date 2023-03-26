import Text from "../../styles/Typography";
import { StyledTextContainer } from "./style";

// Container de texto principal da página de login e registro.

const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <StyledTextContainer>
      <Text tag="h1" fontSize="title2" color="grey3">
        {title}
      </Text>
      <Text fontSize="text2" color="grey3">
        {subtitle}
      </Text>
    </StyledTextContainer>
  );
};

export default Title;
