import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ErrorState {
  text?: string;
  type?: 'success' | 'danger' | 'warning';
}

const initialState: ErrorState = {};

export const errorReducer = createSlice({
  name: 'error',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<ErrorState>) => {
      state.text = action.payload.text;
      state.type = action.payload.type;
    },
    clean: (state) => {
      return initialState
    },
  },
});

export const { save, clean } = errorReducer.actions;
export const selectError = (state: RootState) =>
  Object.keys(state.globalError).length === 0 ? null : state.globalError;

export default errorReducer.reducer;
