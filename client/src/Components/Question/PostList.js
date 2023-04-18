import PostContents from './PostContents';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostListWrapper = styled.div`
  margin: 10px;
`;

const PostList = () => {
  const navigate = useNavigate();

  const posts = [
    { id: 1, title: '첫 번째 글' },
    { id: 2, title: '두 번째 글' },
    { id: 3, title: '세 번째 글' },
  ];
  return (
    <PostListWrapper>
      <PostContents />
      <div>Top Question</div>
      <button>Ask Question</button>
      <Routes>
        <Route path="/list/posts/:id" element={<PostContents />} />
      </Routes>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => navigate(`posts/${post.id}`)}>
            {post.title}
          </li>
        ))}
      </ul>
    </PostListWrapper>
  );
};

export default PostList;
