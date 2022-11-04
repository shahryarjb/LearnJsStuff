import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import errorReducer from './general/errorSlice';

export const store = configureStore({
  reducer: {
    globalError: errorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
