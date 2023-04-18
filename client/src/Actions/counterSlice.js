import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  // ! 슬라이스 예시
  // ! 상황에 따라 여러 슬라이스 파일을 만들어 관리할 수 있음
  name: 'counter',
  initialState: {
    value: 0,
  },
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
