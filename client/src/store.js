import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Actions/counterSlice';

const store = configureStore({
  reducer: {
    // TODO : add reducers
    counter: counterSlice.reducer,
  },
});

export default store;
