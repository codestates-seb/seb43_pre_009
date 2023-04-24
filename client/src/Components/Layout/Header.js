import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../logo-stackoverflow.svg';
import {
  Btns,
  HeaderWrapper,
  TopBarContainer,
  TopBarBtn,
  HeaderLogo,
} from './styled';

function Header() {
  const islogin = useSelector((state) => state.islogin.value);

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // 로그아웃 성공
          console.log('로그아웃 되었습니다.');
        } else {
          // 로그아웃 실패
          console.log('로그아웃 실패');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <HeaderWrapper>
        <TopBarContainer>
          <HeaderLogo href="/">
            <Logo />
          </HeaderLogo>
          <h1>{`${islogin}`}</h1>
          <TopBarBtn>
            {islogin ? (
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
