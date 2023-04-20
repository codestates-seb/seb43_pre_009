import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Actions/counterSlice';
import addQuestionReducer from './Actions/addQuestionSlice';
import isLoginSlice from './Actions/isLoginSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
        islogin: isLoginSlice,
            addQuestion: addQuestionReducer,
  },
});

export default store;
