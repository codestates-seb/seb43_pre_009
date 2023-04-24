//PostAnswer.js
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Btns } from '../Layout/styled';
import axios from 'axios';

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
        alert('Your answer has been submitted!');
      })
      .catch((errer) => {
        console.log(errer);
        console.log(answer);
        alert('Failed to submit your answer');
      });
  };

  return (
    <>
      <h2>Your Answer</h2>
      <form onSubmit={handleSubmit}>
        <ReactQuill value={answer} onChange={handleAnswerChange} />
        <Btns type="submit">Post Your Answer</Btns>
      </form>
    </>
  );
};

export default PostAnswer;
