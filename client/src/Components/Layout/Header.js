import { Btns, HeaderWrapper, TopBarContainer, TopBarBtn } from './styled';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <HeaderWrapper>
        <TopBarContainer>
          <a href="/">stackoverflow{/* 로고 들어갈 자리 */}</a>
          <TopBarBtn>
            <Link to="/login">
              <Btns>Login</Btns>
            </Link>
            <Link to="/signup">
              <Btns>Sign up</Btns>
            </Link>
          </TopBarBtn>
        </TopBarContainer>
      </HeaderWrapper>
    </>
  );
}

export default Header;
