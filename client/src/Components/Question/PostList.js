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
