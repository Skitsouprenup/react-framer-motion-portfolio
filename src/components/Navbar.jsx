import { FlexContainer, IconContainer } from "../styles/globals.styles";
import { NavbarLinks, Navbar as Navigation } from "../styles/navbar.styles";
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Navigation>
        <FlexContainer 
            $left="10px" 
            $right="10px" 
            $align="center"
            $gapx="10px"
            $height="100%">
            <IconContainer><img src={Logo} alt="logo" width="30px" /></IconContainer>
            <FlexContainer $gapx="10px">
                <NavbarLinks onClick={() => {location.href="#intro"}}>Home</NavbarLinks>
                <NavbarLinks onClick={() => {location.href="#skills"}}>Skills</NavbarLinks>
                <NavbarLinks onClick={() => {location.href="#projects"}}>Projects</NavbarLinks>
            </FlexContainer>
        </FlexContainer>
    </Navigation>
  );
};

export default Navbar;