import { Btns, HeaderWrapper, TopBarContainer, TopBarBtn } from './styled';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Actions/isLoginSlice';

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
          <a href="/">stackoverflow</a>
          <h1>{`${islogin}`}</h1>
          <TopBarBtn>
            {islogin ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <Link to="/login">
                  <Btns>Login</Btns>
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
