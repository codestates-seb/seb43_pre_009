import { Link } from 'react-router-dom';
import { NavWrapper, Menu } from './styled';

function SideNav() {
  return (
    <NavWrapper>
      <Link to="*">
        <Menu>Questions</Menu>
      </Link>
      <Link to="/user">
        <Menu>Users</Menu>
      </Link>
    </NavWrapper>
  );
}

export default SideNav;
