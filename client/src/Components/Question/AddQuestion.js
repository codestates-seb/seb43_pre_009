import styled from 'styled-components';

const AddQuestionWrapper = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`;

const AddQuestion = () => {
  return (
    <AddQuestionWrapper>
      <div>질문작성 페이지</div>
    </AddQuestionWrapper>
  );
};

export default AddQuestion;
