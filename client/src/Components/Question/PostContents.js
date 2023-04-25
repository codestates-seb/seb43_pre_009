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
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/questions/${id}`).then((res) => {
      setPost(res.data);
    });
  }, [id]);

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

  const parsedContent = parse(post.contents || '', {
    replace: replaceCodeBlocks,
  });

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/questions/${id}`).then((res) => {
      console.log(res);
    });
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
      <div>
        <a href={`/question/edit/${post.id}`}>edit</a>
      </div>
      <button onClick={handleDelete}>delete</button>
    </>
  );
};

export default PostContents;
