import { NavWrapper, StyledNavLink } from './styled';

function SideNav() {
  const menuActive = 'active';

  return (
    <NavWrapper>
      <StyledNavLink to="/" activeclassname={menuActive}>
        Questions
      </StyledNavLink>
      <StyledNavLink to="/user" activeclassname={menuActive}>
        Users
      </StyledNavLink>
    </NavWrapper>
  );
}

export default SideNav;
