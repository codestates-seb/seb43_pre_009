import { Routes, Route, Link } from 'react-router-dom';
import { Btns, WrapperHeader } from './styled';
import PostContents from '../Question/PostContents';
import PostList from '../Question/PostList';

function Header() {
  return (
    <WrapperHeader>
      <Link to="/login">
        <Btns>컨텐츠</Btns>
      </Link>
      <Link to="/signup">
        <Btns>리스트</Btns>
      </Link>
      <div>stackoverflow</div> {/* 로고 들어갈 자리 */}
      <Routes>
        <Route path="/login" element={<PostContents />} />
        <Route path="/signup" element={<PostList />} />
      </Routes>
    </WrapperHeader>
  );
}

export default Header;
