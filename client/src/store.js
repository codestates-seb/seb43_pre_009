import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Actions/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
