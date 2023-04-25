// List.js 리스트의 기능을 담당하는 컴포넌트
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paging from './Paging';

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

  button {
    display: block;
    justify-content: center;
    align-items: center;
    /* line-height: 20px; 글자 수직 가운데 정렬 */
    font-size: 0.8rem;
    background-color: #0795fe;
    width: 120px;
    height: 25px;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    margin: 5px;
    text-align: center;
    box-shadow: inset 0px 2px 4px rgba(255, 255, 255, 0.5);
    transition: background-color 0.1s ease-in-out;
  }

  button :hover {
    background-color: #0575e6;
  }

  button :active {
    background-color: #0c7bdc;
    box-shadow: none;
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

  div:last-child {
    margin-top: 10px;
    font-size: 10px;
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
      <div>{createdAt}</div>
    </CardWrapper>
  );
};

const List = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Redux Toolkit으로 로그인 상태 확인
  const isLogin = useSelector((state) => state.islogin.value);

  const handleAskQuestionClick = () => {
    if (isLogin) {
      navigate('/question/add');
    } else {
      const result = window.confirm(
        '로그인이 필요합니다. 로그인 하시겠습니까?'
      );
      if (result) {
        navigate('/login');
      } else {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3001/questions').then((res) => {
      // 최신순으로 정렬
      const sortedPosts = res.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setPosts(sortedPosts);
    });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 게시글 10개 가져오기
  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <ListWrapper>
      <TitleWrapper>
        <div>Question List</div>
        <button onClick={handleAskQuestionClick}>
          {/* <a href="/question/add">Ask Question</a> */}
          Ask Question
        </button>
      </TitleWrapper>
      {currentPosts.map((post) => (
        <ListCard
          key={post.id}
          id={post.id}
          title={post.title}
          creator={post.creator}
          contents={post.contents}
          createdAt={post.createdAt}
        />
      ))}
      <Paging
        page={currentPage}
        count={posts.length}
        setPage={handlePageChange}
      />
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

export default List;
