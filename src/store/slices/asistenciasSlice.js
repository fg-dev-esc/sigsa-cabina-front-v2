import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clientesCampanias: [],
};

const asistenciasSlice = createSlice({
  name: 'asistencias',
  initialState,
  reducers: {
    setClientesCampanias: (state, action) => {
      state.clientesCampanias = action.payload;
    },
  },
});

export const { setClientesCampanias } = asistenciasSlice.actions;
export default asistenciasSlice.reducer;
