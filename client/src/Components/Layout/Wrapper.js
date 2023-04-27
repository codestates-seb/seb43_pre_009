import Content from './Content';
import SideNav from './SideNav';
import { InnerWrapper } from './styled';
import { useLocation } from 'react-router-dom';

function Wrapper() {
  // TODO 홈/로그인/회원가입 페이지에 SideNav 랜더링 하지 않기
  const location = useLocation();
  const hideSideNav =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <InnerWrapper>
      {hideSideNav ? null : <SideNav />}
      <Content />
    </InnerWrapper>
  );
}

export default Wrapper;
