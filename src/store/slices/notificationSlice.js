import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL_BASE_VER } from '../../constants/url';
import { get } from '../../utils/fetch';

// obtener version del backend
export const startGetVer = createAsyncThunk(
  'notification/startGetVer',
  async () => {
    const response = await get(URL_BASE_VER);
    if (response.code !== -1) {
      return response.data;
    }
    return null;
  }
);

const initialState = {
  versionBackend: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(startGetVer.fulfilled, (state, action) => {
      state.versionBackend = action.payload;
    });
  },
});

export default notificationSlice.reducer;
