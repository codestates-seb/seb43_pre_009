import { createSlice } from '@reduxjs/toolkit';

const isLoginSlice = createSlice({
  name: 'islogin',

  initialState: {
    value: '',
  },

  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

export const { login, logout, setMembers } = isLoginSlice.actions;

export default isLoginSlice.reducer;
