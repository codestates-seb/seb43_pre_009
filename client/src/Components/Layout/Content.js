import { ContentWrapper } from './styled';
import { Routes, Route, useLocation } from 'react-router-dom';

import PostList from '../Question/PostList';
import Profile from '../User/Profile';
import ProfileEdit from '../User/ProfileEdit';
import Login from '../Login/Login';
import Signup from '../Login/Signup';
import PostContents from '../Question/PostContents';
import AddQuestion from '../Question/AddQuestion';
import UpdateQuestion from '../Question/UpdateQuestion';
import Home from './Home';

function Content() {
  // TODO 로그인/회원가입 페이지에 따로 적용되는 스타일
  const location = useLocation();

  const isLoginPageTheme =
    location.pathname === '/login' || location.pathname === '/signup';

  const widePageStyle = isLoginPageTheme
    ? {
        border: isLoginPageTheme && '0',
        width: isLoginPageTheme && '100%',
        maxWidth: isLoginPageTheme && '100%',
        padding: isLoginPageTheme && '0',
      }
    : {};

  return (
    <ContentWrapper style={widePageStyle}>
      <Routes>
        {/* list로 연결 - 수정사항 : 하위 라우터를 연결하는 중첩라우팅의 경우 "와일드카드"의 개념을 활용하여 작성해야 한다 */}
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostContents />} />
        <Route path="/question/*" element={<PostList />} />
        <Route path="/question/add" element={<AddQuestion />} />
        <Route path="/question/edit/:id" element={<UpdateQuestion />} />
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
