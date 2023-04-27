import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login, logout } from '../../Actions/isLoginSlice';
import { ReactComponent as Logo } from '../../logo-stackoverflow.svg';
import {
  LoginWrapper,
  LoginPageWrapper,
  InputWrapper,
  LoginBtn,
  LogoImg,
} from './styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.islogin.value);

  const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // 쿠키를 보내기 위한 옵션 설정
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const onChange = (event) => {
    console.log(event.target.name, event.target.value);
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(email, password);
      if (data.success) {
        console.log('로그인 성공:', data);
        // setIsLoggedin(true);
        dispatch(login());
        navigate('/');
        // window.location.reload(); ===> 이 코드로 인해 현재 어플리케이션의 로그인 상태가 유지되지 않는 문제 발생
      } else {
        console.log('로그인 실패');
        dispatch(logout());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginPageWrapper>
      <LogoImg>
        <Logo viewBox="2 2 113 121" />
      </LogoImg>
      <form onSubmit={onSubmit}>
        <LoginWrapper>
          <InputWrapper>
            <p>Email</p>
            <input
              name="email"
              type="email"
              required
              value={email}
              onChange={onChange}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Password</p>
            <input
              name="password"
              type="password"
              required
              value={password}
              onChange={onChange}
            />
          </InputWrapper>
          <LoginBtn type="submit" value="Log In">
            Log in
          </LoginBtn>
        </LoginWrapper>
      </form>
      {islogin ? (
        <p>로그인 성공</p>
      ) : (
        <div>
          {/* 이 부분부터 수정해야 함. <br /> */}
          dont have an account? <Link to="/signup">Sign up</Link>
        </div>
      )}
    </LoginPageWrapper>
  );
};

export default Login;
