import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <h1>로그인창</h1>
      <form>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
      <p>
        dont have an account?<Link to="/signup">Signup</Link>
      </p>
    </LoginWrapper>
  );
};

export default Login;
