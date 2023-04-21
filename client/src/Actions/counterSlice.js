import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  // * name: slice의 이름
  name: 'counter',
  // * initialState: slice의 초기 상태
  initialState: {
    value: 0,
  },
  // * reducers: slice의 action 생성 함수 === counterSlice.actions === counter.value
  // * 컴포넌트에서 dispatch가 실행되면, increment/decrement 액션 생성 함수가 실행되고, 해당 함수 내에서는 state의 value 값을 1 증가/감소 시킨다.
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
