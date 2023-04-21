import { configureStore } from '@reduxjs/toolkit';
import addQuestionReducer from './Actions/addQuestionSlice';
import isLoginSlice from './Actions/isLoginSlice';

const store = configureStore({
  reducer: {
    addQuestion: addQuestionReducer,
    islogin: isLoginSlice,
  },
});

export default store;
