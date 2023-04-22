// 실질적인 기능을 담당하기 보다는 페이지를 구성하는 컴포넌트를 불러오는 역할만 한다.
import List from './List';
import styled from 'styled-components';

const PostListWrapper = styled.div`
  margin: 10px;
`;

const PostList = () => {
  return (
    <PostListWrapper>
      <List />
    </PostListWrapper>
  );
};

export default PostList;
