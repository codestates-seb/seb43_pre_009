// 채택기능 구현 순서
// 1. 여러 개의 답변 중 하나를 채택할 수 있도록 구현
// 2. 최초 상태 여러개의 답변 중 하나를 채택할 수 있도록 구현
// 3. 본 컴포넌트는 채택 상태에 따라 다른 UI를 보여주고, 현재 id에 해당하는 게시물의 채택 여부를 toolkit을 통해 업데이트
// 4. 본 컴포넌트가 여러 답변에서 사용될 것임으로 해당 상태를 고려하여 구현
// 5. 3개의 상태
// 6. 상태 1 : 현재 컴포넌트가 채택된 상태 ===> 채택 취소 버튼을 보여줌
// 7. 상태 2 : 답변이 채택되었으나 현재 컴포넌트가 채택되지 않은 상태 ===> 채택 완료 표시를 보여줌
// 8. 상태 3 : 아직 답변 채택이 되지 않은 상태 ===> 채택 버튼을 보여줌
import { useState } from 'react';
import axios from 'axios';

const AcceptAnswer = ({ answer, postId, setAcceptedAnswer }) => {
  const [isAccepted, setIsAccepted] = useState(
    answer.answer_status === 'ANSWER_ADOPT'
  );

  const handleAccept = () => {
    axios
      .patch(`http://localhost:3001/answer/${answer.answer_id}`, {
        answer_status: 'ANSWER_ADOPT',
      })
      .then(() => {
        setIsAccepted(true);
        setAcceptedAnswer(answer.answer_id);
      })
      .catch((err) => {
        console.log(err);
        alert('Failed to accept the answer');
      });
  };

  return (
    <button onClick={handleAccept} disabled={isAccepted}>
      {isAccepted ? 'Accepted' : 'Accept'}
    </button>
  );
};

export default AcceptAnswer;
