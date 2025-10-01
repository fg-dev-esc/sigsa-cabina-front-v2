import { createSlice } from '@reduxjs/toolkit';
import { startLogin, startVerifyBrowser, startAllowBrowser } from './authSlice';

const initialState = {
  loginErr: null,
  registerDeviceErr: null,
};

const authErrSlice = createSlice({
  name: 'authErr',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.loginErr = null;
      state.registerDeviceErr = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startLogin.rejected, (state, action) => {
        state.loginErr = action.payload;
      })
      .addCase(startLogin.pending, (state) => {
        state.loginErr = null;
      })
      .addCase(startVerifyBrowser.rejected, (state, action) => {
        state.loginErr = action.payload;
      })
      .addCase(startAllowBrowser.rejected, (state, action) => {
        state.registerDeviceErr = action.payload;
      })
      .addCase(startAllowBrowser.pending, (state) => {
        state.registerDeviceErr = null;
      });
  },
});

export const { clearErrors } = authErrSlice.actions;
export default authErrSlice.reducer;
