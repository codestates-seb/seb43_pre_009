import { ContentWrapper } from './styled';
import { Routes, Route } from 'react-router-dom';

import PostList from '../Question/PostList';
import Profile from '../User/Profile';
import ProfileEdit from '../User/ProfileEdit';
import Login from '../Login/Login';
import Signup from '../Login/Signup';

function Content() {
  return (
    <ContentWrapper>
      <div>컨텐츠 영역 입니다.</div>
      <Routes>
        {/* 로그인으로 연결 */}
        <Route path="/login" element={<Login />} />
        {/* 회원가입으로 연결! */}
        <Route path="/signup" element={<Signup />} />
        {/* list로 연결 - ok */}
        <Route path="/list" element={<PostList />} />
        {/* user page로 연결 */}
        <Route path="/user" element={<Profile />} />
        <Route path="/useredit" element={<ProfileEdit />}></Route>
      </Routes>
    </ContentWrapper>
  );
}

export default Content;
