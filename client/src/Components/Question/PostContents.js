// PostContents.js
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Actions/counterSlice';

const ReputationWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

const Reputation = styled.div`
  font-size: 20px;
`;

const IncreaseReputation = styled.button`
  background-color: #555;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
const DecreaseReputation = styled.button`
  background-color: #555;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const PostContents = () => {
  // * 해당 slice에서 value 값을 가져와서 reputation이라는 변수에 할당하고, useSelector 훅을 사용하여 해당 state를 구독한다.
  // * state와 counter는 이 컴포넌트에서 동일하다. // state = { counter: { value: 0 } } === reputation = 0
  // * useSelector는 store에 있는 객체를 구독하는거고, dispatch는 액션을 생성하고 정의된 reducer에 따라 실행
  const reputation = useSelector((state) => state.counter.value);
  // ? const selectCounterValue = (state) => state.counter.value;
  // ? const reputation = useSelector(selectCounterValue);
  // * 액션 생성 함수를 dispatch하는 handleIncreaseReputation과 handleDecreaseReputation 함수를 정의한다.
  const dispatch = useDispatch();

  const handleIncreaseReputation = () => {
    // * up 버튼을 눌렀을 때, handleIncreaseReputation 함수가 실행되고, 해당 함수 내에서 increment 액션 생성 함수를 dispatch 합니다. 이로 인해, Redux store의 state.counter.value 값이 1 증가하게 된다.
    dispatch(increment());
  };

  const handleDecreaseReputation = () => {
    dispatch(decrement());
  };

  // * 처음 렌더링 되었을 때, initialState에서 value가 0으로 지정되므로, reputation 값도 0이 된다.
  return (
    <>
      <ReputationWrapper>
        <IncreaseReputation onClick={handleIncreaseReputation}>
          Up
        </IncreaseReputation>
        <Reputation>{reputation}</Reputation>
        <DecreaseReputation onClick={handleDecreaseReputation}>
          Down
        </DecreaseReputation>
      </ReputationWrapper>

      <div>여기는 글 페이지</div>
      <button>Add Comment</button>
    </>
  );
};

export default PostContents;
