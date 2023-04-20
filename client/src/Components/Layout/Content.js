import { ContentWrapper } from './styled';
import { Routes, Route } from 'react-router-dom';

import PostList from '../Question/PostList';
import Profile from '../User/Profile';
import ProfileEdit from '../User/ProfileEdit';
import Login from '../Login/Login';
import Signup from '../Login/Signup';
import PostContents from '../Question/PostContents';
import AddQuestion from '../Question/AddQuestion';
// import AddQuestion from '../Question/AddQuestion';

function Content() {
  return (
    <ContentWrapper>
      <Routes>
        {/* list로 연결 - 수정사항 : 하위 라우터를 연결하는 중첩라우팅의 경우 "와일드카드"의 개념을 활용하여 작성해야 한다 */}
        <Route path="/" element={`Home Contents`} />
        <Route path="/post/*" element={<PostContents />} />
        <Route path="/question/*" element={<PostList />} />
        <Route path="/question/add" element={<AddQuestion />} />
        {/* 로그인으로 연결 */}
        <Route path="/login" element={<Login />} />
        {/* 회원가입으로 연결! */}
        <Route path="/signup" element={<Signup />} />
        {/* user page로 연결 */}
        <Route path="/user" element={<Profile />} />
        <Route path="/useredit" element={<ProfileEdit />} />
      </Routes>
    </ContentWrapper>
  );
}

export default Content;
