//AnswerList.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const AnswerList = ({ id }) => {
  const [answer, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/questions/${id}/answer`).then((res) => {
      setAnswers(res.data);
    });
  }, [id]);

  return (
    <>
      {answer.map((answer) => (
        <div key={answer.id}>
          <div>{answer.contents}</div>
          <div>{answer.createdAt}</div>
        </div>
      ))}
    </>
  );
};

export default AnswerList;
