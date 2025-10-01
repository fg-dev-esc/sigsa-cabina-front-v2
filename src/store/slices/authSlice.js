import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { consLogged } from '../../constants/consLogged';
import { URL_LOGIN, URL_BASE_ALLOWEDBROWSER } from '../../constants/url';
import { post, get } from '../../utils/fetch';
import parseJwt from '../../utils/parseJwt';

// login con api
export const startLogin = createAsyncThunk(
  'auth/startLogin',
  async (body, { dispatch, rejectWithValue }) => {
    const response = await post(URL_LOGIN, { ...body, app: 'cabina' });
    const browser = await dispatch(startVerifyBrowser()).unwrap();

    if (browser) {
      if (response.code !== -1) {
        localStorage.setItem('token', response.data);
        const userData = parseJwt(response.data);
        return { logged: consLogged.LOGGED, user: userData };
      } else {
        return rejectWithValue(response.error);
      }
    }
    return rejectWithValue('Device not registered');
  }
);

// verificar login al iniciar
export const verificaLogin = createAsyncThunk(
  'auth/verificaLogin',
  async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const userData = parseJwt(token);
      return { logged: consLogged.LOGGED, user: userData };
    } else {
      return { logged: consLogged.NOTLOGGED, user: null };
    }
  }
);

// verificar navegador registrado
export const startVerifyBrowser = createAsyncThunk(
  'auth/startVerifyBrowser',
  async (_, { rejectWithValue }) => {
    const signature = localStorage.getItem('signature');

    if (!signature) {
      return rejectWithValue('Device not registered');
    }

    const url = `${URL_BASE_ALLOWEDBROWSER}/IsBrowserAllowed/${signature}`;
    const response = await get(url);

    if (response.code !== -1) {
      return true;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

// registrar navegador
export const startAllowBrowser = createAsyncThunk(
  'auth/startAllowBrowser',
  async (body, { rejectWithValue }) => {
    const url = `${URL_BASE_ALLOWEDBROWSER}/AllowBrowser`;
    const response = await post(url, body);

    if (response.code !== -1) {
      localStorage.setItem('signature', response.data);
      window.location.reload();
      return response.data;
    } else {
      return rejectWithValue(response.error.status ? 'Error in post' : response.error);
    }
  }
);

const initialState = {
  logged: consLogged.INICIANDO,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.logged = consLogged.NOTLOGGED;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startLogin.fulfilled, (state, action) => {
        state.logged = action.payload.logged;
        state.user = action.payload.user;
      })
      .addCase(verificaLogin.fulfilled, (state, action) => {
        state.logged = action.payload.logged;
        state.user = action.payload.user;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
