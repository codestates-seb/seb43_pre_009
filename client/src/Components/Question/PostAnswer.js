//PostAnswer.js
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Btns } from '../Layout/styled';
import axios from 'axios';
import hljs from 'highlight.js';
import { QuillEditorWrapper } from './styled';
// import AcceptAnswer from './AcceptAnswer';

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

const PostAnswer = ({ id }) => {
  const [answer, setAnswer] = useState('');
  const now = new Date().toISOString();

  const handleAnswerChange = (content) => {
    setAnswer(content);
  };

  const handleSubmit = (e) => {
    axios
      .post(`http://localhost:3001/questions/${id}/answer`, {
        contents: answer,
        createdAt: now,
      })
      .then(() => {
        setAnswer('');
      })
      .catch((errer) => {
        console.log(errer);
        alert('Failed to submit your answer');
      });
  };

  return (
    <>
      <h2>Your Answer</h2>
      <form onSubmit={handleSubmit}>
        <QuillEditorWrapper>
          <ReactQuill
            name="answer"
            value={answer}
            onChange={handleAnswerChange}
            modules={modules}
            formats={formats}
            theme="snow"
          />
        </QuillEditorWrapper>
        <Btns type="submit">Post Your Answer</Btns>
      </form>
      {/* <AcceptAnswer /> */}
    </>
  );
};

export default PostAnswer;
