import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (_state, action) => ({
      isAuth: true,
      user: action.payload,
    }),
    resetAuth: () => initialState,
  },
});

const { actions, reducer: authReducer } = authSlice;
const { setAuth, resetAuth } = actions;

export { authReducer as default, setAuth, resetAuth, actions };
