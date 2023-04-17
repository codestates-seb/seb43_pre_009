import { Routes, Route } from 'react-router-dom';
import { Btns, WrapperHeader } from './styled';

function Header() {
  return (
    <WrapperHeader>
      <div>stackoverflow</div> {/* 로고 들어갈 자리 */}
      <Routes>
        <Route path="/login" element={<Btns>Login</Btns>} />
        <Route path="/signup" element={<Btns>Signup</Btns>} />
      </Routes>
    </WrapperHeader>
  );
}

export default Header;
