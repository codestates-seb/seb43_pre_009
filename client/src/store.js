import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Actions/counterSlice';
import isLoginSlice from './Actions/isLoginSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    islogin: isLoginSlice,
  },
});

export default store;
