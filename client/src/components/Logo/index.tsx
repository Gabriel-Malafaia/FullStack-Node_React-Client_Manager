import { StyledLogoContainer } from "./style";
import Logo from "../../assets/contact-logo.png";
import Text from "../../styles/Typography";

const LogoComponent = () => {
  return (
    <StyledLogoContainer>
      <img src={Logo} alt="" />
      <Text tag="h1" fontSize="title2">
        Contacts Manager
      </Text>
    </StyledLogoContainer>
  );
};

export default LogoComponent;
