import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { reducer } from './reducer';

export const store = configureStore({
  reducer: reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;