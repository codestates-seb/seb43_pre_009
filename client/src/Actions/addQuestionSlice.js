import { createSlice } from '@reduxjs/toolkit';

const addQuestionSlice = createSlice({
  name: 'addQuestion',
  initialState: {
    title: '',
    contents: '',
    expect: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContents: (state, action) => {
      state.contents = action.payload;
    },
    setExpect: (state, action) => {
      state.expect = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetForm: (state) => {
      state.title = '';
      state.contents = '';
      state.expect = '';
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  setTitle,
  setContents,
  setExpect,
  setLoading,
  setError,
  resetForm,
} = addQuestionSlice.actions;

export default addQuestionSlice.reducer;
