// PostContents.js
import { Btns } from '../Layout/styled';
import { QuestionHeader, FlexItem, Title, QuestionContent } from './styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuestion } from '../../Actions/questionSlice';

const PostContents = ({ id }) => {
  const question = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    const fetchQuestion = async () => {
      try {
        const res = await fetch(`http://localhost:3001/questions/${id}`);
        const data = await res.json();
        dispatch(setCurrentQuestion(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestion();
  }, [dispatch, id]);

  return (
    <>
      {question ? (
        <>
          <QuestionHeader>
            <Title>{question.title}</Title>
            <FlexItem>
              <Btns>
                <a href="/question/add">Ask Question</a>
              </Btns>
            </FlexItem>
          </QuestionHeader>
          <QuestionContent>{question.contents}</QuestionContent>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PostContents;
