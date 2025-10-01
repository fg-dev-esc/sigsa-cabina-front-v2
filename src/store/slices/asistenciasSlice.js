import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL_BASE_ASISTENCIAS } from '../../constants/url';
import { get } from '../../utils/fetch';

// cargar clientes y campañas
export const startLoadClientesCampanias = createAsyncThunk(
  'asistencias/startLoadClientesCampanias',
  async () => {
    const result = await get(`${URL_BASE_ASISTENCIAS}/GetClientesCampanias`);
    if (result.code === 0) {
      return result.data;
    }
    return [];
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(startLoadClientesCampanias.fulfilled, (state, action) => {
      state.clientesCampanias = action.payload;
    });
  },
});

export const { setClientesCampanias } = asistenciasSlice.actions;
export default asistenciasSlice.reducer;
