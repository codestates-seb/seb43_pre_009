import { configureStore } from '@reduxjs/toolkit';
import questionSlice from './Actions/questionSlice';
import addQuestionReducer from './Actions/addQuestionSlice';
import isLoginSlice from './Actions/isLoginSlice';

const store = configureStore({
  reducer: {
    question: questionSlice,
    addQuestion: addQuestionReducer,
    islogin: isLoginSlice,
  },
});

export default store;
