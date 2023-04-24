import { Btns } from '../Layout/styled';
import { QuestionHeader, FlexItem, Title, ContentsWrapper } from './styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';
import axios from 'axios';

const PostContents = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

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
        </>
      ) : (
        <div>Loading...</div>
      )}
      <div>
        <a href={`/question/edit/${post.id}`}>edit</a>
      </div>
    </>
  );
};

export default PostContents;
