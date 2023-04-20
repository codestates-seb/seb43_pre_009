import { NavWrapper, StyledNavLink, Text } from './styled';

function SideNav() {
  const menuActive = 'active';

  return (
    <NavWrapper>
      <StyledNavLink to="/" activeclassname={menuActive}>
        Home
      </StyledNavLink>
      <Text>PUBLIC</Text>
      <StyledNavLink
        to="/question/*"
        activeclassname={menuActive}
        pL30="30px"
        dB="block"
      >
        Questions
      </StyledNavLink>
      <StyledNavLink to="/user" activeclassname={menuActive} pL30="30px">
        Users
      </StyledNavLink>
    </NavWrapper>
  );
}

export default SideNav;
