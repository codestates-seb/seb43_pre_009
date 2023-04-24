//AnswerList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const AnswerList = ({ id }) => {
  const [answer, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/questions/${id}/answer`).then((res) => {
      setAnswers(res.data);
    });
  }, [id]);

  //
  const replaceCodeBlocks = (domNode) => {
    if (
      domNode.name === 'pre' &&
      domNode.attribs &&
      domNode.attribs.class === 'ql-syntax' &&
      domNode.attribs.spellcheck === 'false'
    ) {
      return (
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {domNode.children[1].data}
        </SyntaxHighlighter>
      );
    }
  };

  const parsedContent = (content) => {
    return parse(content || '', {
      replace: replaceCodeBlocks,
    });
  };
  //

  return (
    <>
      {answer.map((answer) => (
        <div key={answer.id}>
          <div>{parsedContent(answer.contents)}</div>
          <div>{answer.createdAt}</div>
        </div>
      ))}
    </>
  );
};

export default AnswerList;
