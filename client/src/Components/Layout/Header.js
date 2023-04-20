import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo-stackoverflow.svg';
import {
  Btns,
  HeaderWrapper,
  TopBarContainer,
  TopBarBtn,
  HeaderLogo,
} from './styled';

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <>
      <HeaderWrapper>
        <TopBarContainer>
          <HeaderLogo href="/">
            <Logo />
          </HeaderLogo>
          <TopBarBtn>
            {isLogin ? (
              <Btns onClick={handleLogout}>Logout</Btns>
            ) : (
              <>
                <Link to="/login">
                  <Btns
                    onClick={handleLogin}
                    bgcolor="#E1EDF5"
                    color="#39749D"
                    border
                    bghover="#b4d3eb"
                  >
                    Log in
                  </Btns>
                </Link>
                <Link to="/signup">
                  <Btns>Sign up</Btns>
                </Link>
              </>
            )}
          </TopBarBtn>
        </TopBarContainer>
      </HeaderWrapper>
    </>
  );
}

export default Header;
