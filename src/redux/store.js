import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@redux/authSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  postsReducer,
  postsMiddleware,
  reducerPath as postsPath,
} from '@/redux/api/posts';

const store = configureStore({
  reducer: {
    [postsPath]: postsReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares({ serializableCheck: false }).concat(postsMiddleware),
});

setupListeners(store.dispatch);

export default store;
