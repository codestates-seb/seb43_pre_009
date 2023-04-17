import { Routes, Route } from 'react-router-dom';
import { Btns, WrapperHeader } from './styled';

function Header() {
  return (
    <WrapperHeader>
      <div>stackoverflow</div> {/* 로고 들어갈 자리 */}
      <Routes>
        <Btns>
          <Route path="/login">Login</Route>
          <Route path="signup">Signup</Route>
        </Btns>
      </Routes>
    </WrapperHeader>
  );
}

export default Header;
