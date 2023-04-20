import { NavWrapper, StyledNavLink, Text } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function SideNav() {
  const menuActive = 'active';

  const icoEarth = <FontAwesomeIcon icon={faEarthAmericas} />;
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
        {icoEarth} Questions
      </StyledNavLink>
      <StyledNavLink to="/user" activeclassname={menuActive} pL30="30px">
        Users
      </StyledNavLink>
    </NavWrapper>
  );
}

export default SideNav;
