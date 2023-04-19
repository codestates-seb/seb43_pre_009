import styled from 'styled-components';
import QuillEditor from './QuillEditor';

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

const InputTitleWrapper = styled.div`
  background-color: #ffffff;
  height: 100px;
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

  button {
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
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #0571c6;
  }

  button:focus {
    outline: none;
  }
`;

const InputTitle = () => {
  return (
    <InputTitleWrapper>
      <div>Title</div>
      <div>
        Be specific and imagine you’re asking a question to another person.
      </div>
      <input
        type="text"
        placeholder="질문에 핵심 내용이 드러나도록 작성해주세요"
      ></input>
      <button>Next</button>
    </InputTitleWrapper>
  );
};

const InputContentsWrapper = styled.div`
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

  button {
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
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #0571c6;
  }

  button:focus {
    outline: none;
  }
`;

const InputContents = () => {
  return (
    <InputContentsWrapper>
      <div>What are the details of your problem?</div>
      <div>
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </div>
      <form>
        <QuillEditor />
        <button>Next</button>
      </form>
    </InputContentsWrapper>
  );
};

// InputContents와 InputExpect의 스타일이 같아서 하나로 합침

const InputExpect = () => {
  return (
    <InputContentsWrapper>
      <div>What did you try and what were you expecting?</div>
      <div>
        Describe what you tried, what you expected to happen, and what actually
        resulted. Minimum 20 characters.
      </div>
      <form>
        <QuillEditor />
        <button>Submit</button>
      </form>
    </InputContentsWrapper>
  );
};

// 상태관리구조
// const initialState = {
//   questionTitle: '',
//   questionContent: '',
//   questionExpect: '',
//   isLoading: false,
//   hasError: false,
// };

// RestFull API로 전송하기 위한 데이터 구조
// {
//   title: '질문 제목',
//   content: '질문 내용',
//   expect: '예상 결과',
// }

const AddQuestion = () => {
  return (
    <AddQuestionWrapper>
      <form>
        <h2>Ask a public question</h2>
        <GuideLine />
        <InputTitle />
        <InputContents />
        <InputExpect />
      </form>
    </AddQuestionWrapper>
  );
};

export default AddQuestion;
