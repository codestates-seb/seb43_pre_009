import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const UpdateQuestionWrapper = styled.div``;

const GuideLineWrapper = styled.div`
  background-color: #fcf7e4;
  height: 90px;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e4cf85;

  div:first-of-type {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3c4044;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 15px;
  }

  div:nth-of-type(2) {
    /* 두번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 15px;
  }
`;

const InputTitle = styled.div`
  background-color: #ffffff;
  line-height: 1.6em;
  height: 100px;
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #e4e5e7;
  border-radius: 3px;

  div:first-of-type {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  div:nth-of-type(2) {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 13px;
    margin-bottom: 5px;
  }

  input[type='text'] {
    display: block;
    width: 97%;
    padding: 6px;
    border: 1px solid #d9dadc;
    border-radius: 3px;
    margin-bottom: 6px;
    font-size: 14px;
    color: #3b4044;
    transition: border-color 0.2s ease-in-out;
  }

  input[type='text']:focus {
    outline: none;
    border-color: #6c7cff;
  }

  input::placeholder {
    color: #ccc;
    font-size: 12px;
  }
`;

// 가이드라인 코드
const GuideLine = () => {
  return (
    <GuideLineWrapper>
      <div>Your edit will be placed in a queue until it is peer reviewed.</div>
      <div>
        We welcome edits that make the post easier to understand and more
        valuable for readers. Because community members review edits, please try
        to make the post substantially better than how you found it, for
        example, by fixing grammar or adding additional resources and
        hyperlinks.
      </div>
    </GuideLineWrapper>
  );
};

const UpdateQuestion = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState(`${post.title}`);
  const [updateAt, setUpdateAt] = useState(`${post.updateAt}`);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // 수정 되기 전의 게시물을 가져오는 코드
  useEffect(() => {
    axios.get(`http://localhost:3001/questions/${id}`).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  // 수정 되기 전의 게시물을 가져와 각 상태에 할당해놓는 코드
  useEffect(() => {
    setTitle(post.title);
    setUpdateAt(post.updateAt);
  }, [post]);

  // 업데이트된 시간을 가져오는 코드(한국 시간 기준)
  useEffect(() => {
    const currentDateTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Seoul',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    const formattedDateTime = `asked ${currentDateTime}`;
    setUpdateAt(formattedDateTime);
  }, [updateAt]);

  return (
    <UpdateQuestionWrapper>
      <GuideLine />
      {/* 질문 페이지에서 quill을 사용하지 않고 바로 input을 사용한 경우 */}
      <InputTitle>
        <div>Title</div>
        <input
          name="title"
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="질문의 핵심이 드러나도록 제목을 작성해주세요"
        />
      </InputTitle>
    </UpdateQuestionWrapper>
  );
};

export default UpdateQuestion;
