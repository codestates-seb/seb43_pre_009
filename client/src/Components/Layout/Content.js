import { ContentWrapper } from './styled';
import { Routes, Route } from 'react-router-dom';
import PostContents from '../Question/PostContents';
import PostList from '../Question/PostList';

function Content() {
  return (
    <ContentWrapper>
      <div>컨텐츠 영역 입니다.</div>
      <Routes>
        {/* 로그인으로 연결 */}
        <Route path="/login" element={<PostContents />} />
        {/* 회원가입으로 연결 */}
        <Route path="/signup" element={<PostList />} />
        {/* list로 연결 - ok */}
        <Route path="/list" element={<PostList />} />
        {/* user page로 연결 */}
        <Route path="/user" element={<PostContents />} />
      </Routes>
    </ContentWrapper>
  );
}

export default Content;
