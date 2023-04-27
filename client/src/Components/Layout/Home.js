// List.js 리스트의 기능을 담당하는 컴포넌트
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 스타일 코드
const ListWrapper = styled.div``;

const TitleWrapper = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #d6d9dc;
  margin-bottom: 10px;

  div {
    font-size: 24px;
    font-weight: 600;
    flex: 1;
  }
`;

const CardWrapper = styled.div`
  width: 90%;
  margin-bottom: 20px;
  border-bottom: 1px solid #d6d9dc;
  padding-bottom: 20px;

  div:first-child {
    color: #237ed0;
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 160%;
    text-align: left;
    margin-bottom: 10px;
  }

  div:nth-child(2) {
    font-size: 0.8rem;
    line-height: 130%;
    text-align: left;
  }

  div:nth-child(3) {
    color: #f37521;
    font-weight: 600;
    font-size: 11px;
    text-align: right;
    margin-top: 10px;
  }

  div:last-child {
    margin-top: 10px;
    font-size: 11px;
    text-align: right;
  }

  &:hover {
    div:first-child {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;

// 태그 제거 함수
const removeTags = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.replace(/(<([^>]+)>)/gi, '');
};

// ListCard 컴포넌트
const ListCard = ({ id, title, creator, contents, createdAt }) => {
  const shortenedContent = contents
    ? removeTags(contents).slice(0, 200) +
      (contents.length > 100 ? '\n...' : '')
    : '';
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <CardWrapper onClick={handleClick}>
      <div>{title}</div>
      <div>{shortenedContent}</div>
      <div>{creator}</div>
      <div>{createdAt}</div>
    </CardWrapper>
  );
};

// 최근 5개 질문만 리스트업 하는 컴포넌트
const Home = () => {
  const [posts, setPosts] = useState([]);

  // 게시글 목록 불러오기
  useEffect(() => {
    axios.get('http://localhost:3001/questions').then((res) => {
      // 최신순으로 정렬
      const sortedPosts = res.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      const recentPosts = sortedPosts.slice(0, 5);
      setPosts(recentPosts);
    });
  }, []);

  return (
    <ListWrapper>
      <TitleWrapper>
        <div>Recent Question</div>
      </TitleWrapper>
      {posts.map((post) => (
        <ListCard
          key={post.id}
          id={post.id}
          title={post.title}
          creator={post.creator}
          contents={post.contents}
          createdAt={post.createdAt}
        />
      ))}
    </ListWrapper>
  );
};

// prop-types를 이용한 타입 검증
ListCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Home;
