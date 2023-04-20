import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Actions/isLoginSlice';
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
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // 로그아웃 액션 디스패치
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
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <Link to="/login">
                  <Btns
                    bgcolor="#E1EDF5"
                    color="#39749D"
                    border
                    bghover="#b4d3eb"
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
