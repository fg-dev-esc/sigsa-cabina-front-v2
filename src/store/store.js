import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import authErrReducer from './slices/authErrSlice';
import notificationReducer from './slices/notificationSlice';
import asistenciasReducer from './slices/asistenciasSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authErr: authErrReducer,
    notification: notificationReducer,
    asistencias: asistenciasReducer,
  },
  devTools: true,
});
