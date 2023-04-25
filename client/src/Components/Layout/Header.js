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
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3002/logout', {
        method: 'POST',
        credentials: 'include', // 쿠키를 보내기 위한 옵션 설정
      });
      const data = await response.json();
      window.location.reload();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const cookies = document.cookie.split(';');
  const isLoggedIn = cookies.some((cookie) =>
    cookie.trim().startsWith('isLoggedin=')
  );

  return (
    <>
      <HeaderWrapper>
        <TopBarContainer>
          <HeaderLogo href="/">
            <Logo />
          </HeaderLogo>
          <TopBarBtn>
            {isLoggedIn ? (
              <Btns onClick={handleLogout}>Logout</Btns>
            ) : (
              <>
                <Link to="/login">
                  <Btns
                    bgcolor="#dfedf4"
                    color="#1a759b"
                    border
                    bghover="#acd4e9"
                  >
                    Login
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
