import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

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

const QuillEditorWrapper = styled.div`
  .ql-editor {
    height: 200px;
  }
`;

function QuillEditor() {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <QuillEditorWrapper>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </QuillEditorWrapper>
  );
}

export default QuillEditor;
