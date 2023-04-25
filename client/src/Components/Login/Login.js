import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login, logout } from '../../Actions/isLoginSlice';
import { LoginWrapper } from './styled';

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
      } else {
        console.log('로그인 실패');
        dispatch(logout());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <LoginWrapper>
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          <input type="submit" value="Log In" />
        </LoginWrapper>
      </form>
      {islogin ? (
        <p>로그인 성공</p>
      ) : (
        <p>
          dont have an account? <Link to="/signup">Sign up</Link>
        </p>
      )}
    </>
  );
};

export default Login;
