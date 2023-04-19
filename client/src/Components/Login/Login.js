import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/login', {
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
        setIsLoggedin(true);
        navigate('/');
      } else {
        console.log('로그인 실패');
        setIsLoggedin(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
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
      </form>
      {isLoggedin ? (
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
