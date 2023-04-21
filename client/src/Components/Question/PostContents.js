// PostContents.js
import axios from 'axios';
import { Btns } from '../Layout/styled';
import { QuestionHeader, FlexItem, Title, QuestionContent } from './styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentQuestion } from '../../Actions/questionSlice';

const PostContents = () => {
  // const question = useSelector((state) => state.questions);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(id);
  //   const fetchQuestion = async () => {
  //     try {
  //       const res = await fetch(`http://localhost:3001/questions/${id}`);
  //       const data = await res.json();
  //       dispatch(setCurrentQuestion(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchQuestion();
  // }, [dispatch, id]);

  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/questions/${id}`).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  return (
    <>
      {post ? (
        <>
          <QuestionHeader>
            <Title>{post.title}</Title>
            <FlexItem>
              <Btns>
                <a href="/question/add">Ask Question</a>
              </Btns>
            </FlexItem>
          </QuestionHeader>
          <QuestionContent>{post.contents}</QuestionContent>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PostContents;
