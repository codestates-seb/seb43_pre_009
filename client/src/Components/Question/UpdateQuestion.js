import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import styled from 'styled-components';
import axios from 'axios';

const UpdateQuestionWrapper = styled.div``;

const GuideLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcf7e4;
  height: 80px;
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

const QuillEditorWrapper = styled.div`
  .ql-editor {
    height: 220px;
  }
`;

const EditTitle = styled.div`
  background-color: #ffffff;
  line-height: 1.6em;
  height: 70px;
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #e4e5e7;
  border-radius: 3px;

  div:first-of-type {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 1em;
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

const EditContent = styled.div`
  background-color: #ffffff;
  height: 320px;
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #e4e5e7;
  border-radius: 3px;

  div:first-of-type {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const EditExpect = styled.div`
  background-color: #ffffff;
  height: 320px;
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #e4e5e7;
  border-radius: 3px;

  div:first-of-type {
    /* 첫번째 div 요소에 대한 스타일 */
    color: #3b4044;
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const UpdateBtn = styled.button`
  display: block;
  width: 70px;
  height: 30px;
  background-color: #0795fe;
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  border: none;
  border-radius: 3px;
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

const UpdateQuestion = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [creator, setCreator] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [expect, setExpect] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updateAt, setUpdateAt] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (value) => {
    setContent(value);
  };

  const onChangeExpect = (value) => {
    setExpect(value);
  };

  // 수정 되기 전의 게시물을 가져오는 코드
  useEffect(() => {
    axios.get(`http://localhost:3001/questions/${id}`).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, [id]);

  // 수정 되기 전의 게시물을 가져와 각 상태에 할당해놓는 코드
  useEffect(() => {
    setCreator(post.creator);
    setTitle(post.title);
    setContent(post.contents);
    setExpect(post.expect);
    setUpdateAt(post.updatedAt);
    setCreatedAt(post.createdAt);

    // 업데이트 된 식
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
  }, [post]);

  // 수정 버튼을 클릭했을 때 실행되는 함수
  const handleUpdate = (e) => {
    e.preventDefault();
    // 수정 요청을 보내는 코드
    axios
      .put(`http://localhost:3001/questions/${id}`, {
        title,
        creator,
        contents: content,
        expect,
        createdAt,
        updatedAt: updateAt,
        id: post.id, // 기존 게시물의 id 값을 전달
      })
      .then((res) => {
        // 수정 요청이 성공적으로 이루어졌을 때 실행되는 코드
        console.log(res.data);
      })
      .catch((err) => {
        // 수정 요청이 실패했을 때 실행되는 코드
        console.error(err);
      });
  };

  return (
    <UpdateQuestionWrapper>
      <GuideLine />
      {/* 수정 페이지에서 quill을 사용하지 않고 바로 input을 사용한 경우 */}
      <form onSubmit={handleUpdate}>
        <EditTitle>
          <div>Title</div>
          <input
            name="title"
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="질문의 핵심이 드러나도록 제목을 작성해주세요"
          />
        </EditTitle>
        {/* 수정 페이지에서 quill을 사용하여 내용이 수정될 수 있도록 함 */}
        <EditContent>
          <div>Change the content of the post</div>
          <QuillEditorWrapper>
            <ReactQuill
              name="contents"
              value={content}
              onChange={onChangeContent}
              modules={modules}
              formats={formats}
              theme="snow"
            />
          </QuillEditorWrapper>
        </EditContent>
        {/* 수정페이지에서 quill을 사용하여 내용이 수정될 수 있도록 함 */}
        <EditExpect>
          <div>
            If there is something different from what you expected, or if you
            find out more, please add it.
          </div>
          <QuillEditorWrapper>
            <ReactQuill
              name="contents"
              value={expect}
              onChange={onChangeExpect}
              modules={modules}
              formats={formats}
              theme="snow"
            />
          </QuillEditorWrapper>
        </EditExpect>
        <UpdateBtn type="submit">Edit&Post</UpdateBtn>
      </form>
    </UpdateQuestionWrapper>
  );
};

export default UpdateQuestion;
