import Text from "../../styles/Typography";
import Logo from "../../assets/contact-logo.png";
import { StyledLogoContainer } from "./style";

// Logo da aplicação

const LogoComponent = () => {
  return (
    <StyledLogoContainer>
      <img src={Logo} alt="" />
      <Text tag="h1" fontSize="title2" color="grey3">
        Contacts Manager
      </Text>
    </StyledLogoContainer>
  );
};

export default LogoComponent;
