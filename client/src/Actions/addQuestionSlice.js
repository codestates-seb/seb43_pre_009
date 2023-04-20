import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const addQuestionSlice = createSlice({
  name: 'addQuestion',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
  },
});

export const { addPost } = addQuestionSlice.actions;
export const selectPosts = (state) => state.addQuestion.posts;
export default addQuestionSlice.reducer;
