import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 스타일 코드
const AddQuestionWrapper = styled.div`
  /* background-color: #f8f9f9; */
  width: 90%;
`;

const GuideLineWrapper = styled.div`
  background-color: #ebf4fb;
  height: 220px;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #a5ceed;

  div:first-of-type {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  div:nth-of-type(2) {
    /* 두번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 15px;
  }

  div:nth-of-type(3) {
    /* 세번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul:last-of-type > ol:nth-of-type(n) {
    /* n번째 ul 요소에 대한 스타일 */
    display: block;
    font-size: 13px;
    list-style-type: decimal;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 20px;
  }
`;
// input 요소는 최종 렌더링 컴포넌트에서 한번에 다룸
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

// content & expect 스타일이 같아 같은 스타일 컴포넌트 공유
const InputContents = styled.div`
  background-color: #ffffff;
  height: 320px;
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #e4e5e7;
  border-radius: 3px;

  div:first-of-type {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  div:nth-of-type(2) {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

const QuillEditorWrapper = styled.div`
  .ql-editor {
    height: 200px;
  }
`;

const SubmitBtn = styled.button`
  display: block;
  width: 50px;
  height: 30px;
  background-color: #0795fe;
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  border: none;
  border-radius: 3px;
  padding: 0;
  margin-top: 10px;

  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: #0571c6;
  }

  :focus {
    outline: none;
  }
`;

// 가이드라인 코드
const GuideLine = () => {
  return (
    <GuideLineWrapper>
      <div>Writing a good question</div>
      <div>
        You’re ready to ask a programming-related question and this form will
        help guide you through the process.
        <br />
        Looking to ask a non-programming question? See the topics here to find a
        relevant site.
      </div>
      <div>Steps</div>
      <ul>
        <ol>• Summarize your problem in a one-line title.</ol>
        <ol>• Describe your problem in more detail.</ol>
        <ol>• Describe what you tried and what you expected to happen.</ol>
        <ol>
          • Add “tags” which help surface your question to members of the
          community
        </ol>
        <ol>• Review your question and post it to the site.</ol>
      </ul>
    </GuideLineWrapper>
  );
};

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
};

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

// quill 요소는 최종 렌더링 컴포넌트에서 한번에 다룸
const AddQuestion = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [expect, setExpect] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (value) => {
    setContents(value);
  };

  const onChangeExpect = (value) => {
    setExpect(value);
  };

  useEffect(() => {
    const currentDateTime = new Date();
    setCreatedAt(currentDateTime);
  }, []);

  const handleSubmit = async (e) => {
    const API_URL = 'http://localhost:3001/questions';
    e.preventDefault();
    // 유효성 검사: 제목의 길이 확인
    if (title.length < 5) {
      alert('제목은 최소 5자 이상이어야 합니다.');
      return;
    }
    // 유효성 검사: 내용의 길이 확인
    if (contents.length < 20) {
      alert('내용은 최소 20자 이상이어야 합니다.');
      return;
    }
    // 유효성 검사: 기대하는 결과의 길이 확인
    if (expect.length < 5) {
      alert('기대하는 결과는 최소 5자 이상이어야 합니다.');
      return;
    }

    const newQuestion = {
      title,
      contents,
      expect,
      createdAt,
    };
    try {
      const res = await axios.post(`${API_URL}`, newQuestion);
      // post 요청에 성공한 경우에만 /question 경로로 이동
      console.log(res.data);
      navigate('/question/*');
    } catch (error) {
      console.error('예기치 못한 이유로 종료되었습니다.', error);
    }
  };

  return (
    <AddQuestionWrapper>
      {/* 질문 페이지의 고정 컨텐츠 부분 */}
      <h2>Ask a public question</h2>
      <GuideLine />
      <form onSubmit={handleSubmit}>
        {/* 질문 페이지에서 quill을 사용하지 않고 바로 input을 사용한 경우 */}
        <InputTitle>
          <div>Title</div>
          <div>
            Be specific and imagine you’re asking a question to another person.
          </div>
          <input
            name="title"
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="질문의 핵심이 드러나도록 제목을 작성해주세요"
          />
        </InputTitle>

        {/* 질문의 내용이 담기는 부분 */}
        <InputContents>
          <div>What did you try and what were you expecting?</div>
          <div>
            Describe what you tried, what you expected to happen, and what
            actually resulted. Minimum 20 characters.
          </div>
          <QuillEditorWrapper>
            <ReactQuill
              name="contents"
              value={contents}
              onChange={onChangeContents}
              modules={modules}
              formats={formats}
              theme="snow"
            />
          </QuillEditorWrapper>
        </InputContents>

        {/* 질문을 통해 해결하고자 하는 부가 내용이 담기는 부분 */}
        <InputContents>
          <div>What did you try and what were you expecting?</div>
          <div>
            Describe what you tried, what you expected to happen, and what
            actually resulted. Minimum 20 characters.
          </div>
          <QuillEditorWrapper>
            <ReactQuill
              name="expect"
              value={expect}
              onChange={onChangeExpect}
              modules={modules}
              formats={formats}
              theme="snow"
            />
          </QuillEditorWrapper>
        </InputContents>
        {/* 제출버튼 */}
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </form>
    </AddQuestionWrapper>
  );
};

export default AddQuestion;
