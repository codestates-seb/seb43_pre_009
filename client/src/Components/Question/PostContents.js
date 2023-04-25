import axios from 'axios';
import parse from 'html-react-parser';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { QuestionHeader, FlexItem, Title, ContentsWrapper } from './styled';
import { Btns } from '../Layout/styled';
import PostAnswer from './PostAnswer';
import AnswerList from './AnswerList';

const PostContents = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  // 게시물을 가져오는 코드
  useEffect(() => {
    axios.get(`http://localhost:3001/questions/${id}`).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, [id]);

  // 코드 블럭을 위한 함수
  const replaceCodeBlocks = (domNode) => {
    if (
      domNode.name === 'pre' &&
      domNode.attribs &&
      domNode.attribs.class === 'ql-syntax' &&
      domNode.attribs.spellcheck === 'false'
    ) {
      return (
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {domNode.children[0].data}
        </SyntaxHighlighter>
      );
    }
  };
  // 게시물의 내용을 파싱하는 코드
  const parsedContent = parse(post.contents || '', {
    replace: replaceCodeBlocks,
  });

  // ? 유저 정보를 쿠키에서 가져오는 코드 ===> 포스팅!
  // 1. 쿠키 데이터를 상태에 담고
  // 2. 쿠키 데이터를 찾고
  // 3. 디코딩해서 볼 수 있는 형태로
  useEffect(() => {
    // user 닉네임을 받아오는 코드
    const cookies = document.cookie.split('; ');
    let memberName;
    for (let i = 0; i < cookies.length; i++) {
      const [name, value] = cookies[i].split('=');
      if (name === 'memberName') {
        memberName = value;
        break;
      }
    }
    // TODO memberName 변수에 쿠키에서 가져온 값을 할당 --------------------------
    setUser(memberName);
  }, []);

  // 수정 버튼을 누르면 수정 페이지로 이동하는 코드
  const handleEdit = () => {
    // 현재 지금 화면을 사용하고 있는 유저 : user === 포스트 작성자 : creator
    if (user === post.creator) {
      navigate(`/question/edit/${id}`);
    } else {
      alert('접근권한이 없습니다.');
    }
  };

  // TODO 삭제 버튼을 누르면 삭제하는 코드 ---------------------------------------
  const handleDelete = () => {
    if (user === post.creator) {
      axios.delete(`http://localhost:3001/questions/${id}`);
      navigate(`/question/edit/${id}`);
    } else {
      alert("You don't have permission to edit this question.");
    }
    navigate('/question/*');
  };

  return (
    <>
      {post ? (
        <>
          <QuestionHeader>
            <Title>
              <div>{post.title}</div>
            </Title>
            <FlexItem>
              <Btns>
                <a href="/question/add">Ask Question</a>
              </Btns>
            </FlexItem>
          </QuestionHeader>
          <ContentsWrapper>{parsedContent}</ContentsWrapper>
          <AnswerList id={post.id} />
          <PostAnswer id={post.id} />
        </>
      ) : (
        <div>Loading...</div>
      )}
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleDelete}>delete</button>
    </>
  );
};

export default PostContents;
