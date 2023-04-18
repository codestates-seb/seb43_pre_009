import Content from './Content';
import SideNav from './SideNav';
import { InnerWrapper } from './styled';

function Wrapper() {
  return (
    <InnerWrapper>
      <SideNav />
      <Content />
    </InnerWrapper>
  );
}

export default Wrapper;
