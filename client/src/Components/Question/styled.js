import styled from 'styled-components';
import { Btns } from '../Layout/styled';

export const QuillEditorWrapper = styled.div`
  margin-bottom: 18px;
  .ql-editor {
    height: 200px;
  }
`;

export const EditAnswer = styled.div`
  margin-bottom: 32px;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  border-bottom: 1px solid #e3e6e8;
  padding-bottom: 24px;
  & h1 {
    font-size: 24px;
  }
`;

export const FlexItem = styled.div`
  flex: 0 0 auto;
  margin-left: 12px;
`;

export const Title = styled.h1`
  line-height: 1.35;
  font-weight: normal;
  margin-bottom: 0;
`;

/* PostContent */
export const QuestionContent = styled.div`
  padding: 24px 0 24px 24px;
`;

export const PostContentsWrapper = styled.div`
  margin-bottom: 30px;
  & ${Btns} {
    margin: 0 6px 0 0;
  }
`;

// 컨텐츠 내용 스타일링
export const ContentsWrapper = styled.div`
  font-size: 16px;
  line-height: 1.8;
  margin-top: 20px;
  /* 코드블럭이 속한 pre 태그에 대한 스타일 */
  pre {
    background-color: #f6f6f6;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const BtnsWrapper = styled.div`
  margin-top: 32px;
  & button {
    color: #999;
    margin-right: 12px;
  }
`;

/* Answer */

export const AnswerBox = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid #e3e6e8;
  margin-bottom: 24px;
  overflow: hidden;
  padding: 32px 24px;
  & > ${BtnsWrapper} {
    & div {
      float: right;
      color: #989898;
    }
  }
`;

export const AnswerWrapper = styled.div`
  margin-top: 80px;
  &.qlContainer {
    min-height: 180px;
  }
  & h2 {
    margin-bottom: 24px;
  }
  & > button {
    margin: 24px 0 0 0;
  }
  & > ${AnswerBox}:nth-child(odd) {
    background: #f8f8f8;
  }
`;
