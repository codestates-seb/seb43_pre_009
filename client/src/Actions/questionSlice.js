import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: 'question',
  initialState: {
    currentQuestion: null,
    title: '',
    contents: '',
  },
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setQuestionTitle: (state, action) => {
      state.title = action.payload;
    },
    setQuestionContents: (state, action) => {
      state.contents = action.payload;
    },
  },
});

export const { setCurrentQuestion } = questionSlice.actions;

export default questionSlice.reducer;
