//AnswerList.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Btns } from '../Layout/styled';
import {
  BtnsWrapper,
  AnswerBox,
  QuillEditorWrapper,
  EditAnswer,
} from './styled';

// Quill Editor Module
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    ['code', 'code-block'],
    ['clean'],
  ],
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
};
// Quill Editor Formats
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'color',
  'background',
  'font',
  'align',
  'script',
  'code',
  'code-block',
];

const AnswerList = ({ id }) => {
  const [answer, setAnswers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [createdAt, setCreatedAt] = useState('');
  const [questionId, setQuestionId] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/questions/${id}/answer`).then((res) => {
      setAnswers(res.data);
    });
  }, [id]);

  //Delete
  const handleDelete = (answerId) => {
    if (window.confirm('Are you sure to delete this answer?')) {
      axios
        .delete(`http://localhost:3001/answer/${answerId}`)
        .then(() => {
          setAnswers((prevAnswers) =>
            prevAnswers.filter((answer) => answer.id !== answerId)
          );
          alert('Your answer has been deleted.');
        })
        .catch((error) => {
          console.log(error);
          alert('Failed to delete answer.');
        });
    }
  };

  //Edit
  const handleEdit = (answer) => {
    setIsEditing(true); //수정폼이 나타나도록 함
    setEditedContent(answer.contents); //현재 답변의 내용을 editedContent 변수에 저장
    setEditingAnswerId(answer.id);
    setCreatedAt(answer.createdAt);
    setQuestionId(answer.questionId);
  };

  const handleCancelEdit = () => {
    setIsEditing(false); //수정폼이 사라지도록 함
    setEditedContent(''); //editedContent 변수 초기화
    setEditingAnswerId(null);
  };

  const handleSubmit = (answerId) => {
    if (!editedContent.trim()) {
      alert('Please enter a valid answer.'); // 빈 답변인 경우 경고 메시지 표시
      return;
    }
    if (window.confirm('Are you sure you want to edit your answer?')) {
      axios
        .put(`http://localhost:3001/answer/${answerId}`, {
          contents: editedContent,
          createdAt,
          questionId,
        })
        .then(() => {
          axios
            .get(`http://localhost:3001/questions/${id}/answer`)
            .then((res) => {
              setAnswers((prevAnswers) =>
                prevAnswers.map((answer) =>
                  answer.id === answerId
                    ? { ...answer, contents: editedContent }
                    : answer
                )
              );
              setIsEditing(false); //폼닫기
              setEditedContent(''); //변수 초기화
              setEditingAnswerId(null);
              alert('Answer has been successfully edited.');
            });
        })
        .catch((error) => {
          console.log(error);
          alert('Failed to update answer.');
        });
    }
  };

  //답변 html태그 적용해주는 코드 start.
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

  const parsedContent = (content) => {
    return parse(content || '', {
      replace: replaceCodeBlocks,
    });
  };
  //end.

  return (
    <>
      <h2>Answer</h2>
      {answer.map((answer) => (
        <AnswerBox key={answer.id}>
          <div>{parsedContent(answer.contents)}</div>
          <BtnsWrapper>
            <button onClick={() => handleEdit(answer)}>Edit</button>
            <button onClick={() => handleDelete(answer.id)}>Delete</button>
            <div>{answer.createdAt}</div>
          </BtnsWrapper>
        </AnswerBox>
      ))}
      {isEditing && (
        <EditAnswer>
          {/* <ReactQuill value={editedContent} onChange={setEditedContent} /> */}
          <QuillEditorWrapper>
            <ReactQuill
              name="answer"
              value={editedContent}
              onChange={setEditedContent}
              modules={modules}
              formats={formats}
              theme="snow"
            />
          </QuillEditorWrapper>
          <Btns onClick={() => handleSubmit(editingAnswerId)}>Submit</Btns>
          <Btns onClick={handleCancelEdit}>Cancel</Btns>
        </EditAnswer>
      )}
    </>
  );
};

export default AnswerList;
