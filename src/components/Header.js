import { HeaderContainer } from "./styles/Header.style";

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;
