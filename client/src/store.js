import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Actions/counterSlice';
import addQuestionReducer from './Actions/addQuestionSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    addQuestion: addQuestionReducer,
  },
});

export default store;
