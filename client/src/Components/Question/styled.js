import styled from 'styled-components';
import { Btns } from '../Layout/styled';

export const QuestionHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  border-bottom: 1px solid #e3e6e8;
  padding-bottom: 24px;
  & h1 {
    font-size: 24px;
  }
  & > ${Btns} {
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

/* QuestionContent */
export const QuestionContent = styled.div`
  padding: 24px 0 24px 24px;
`;
