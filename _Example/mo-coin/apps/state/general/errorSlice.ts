import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

/* Defining the shape of the state. */
export interface ErrorState {
  text?: string;
  type?: 'success' | 'danger' | 'warning';
}

/* Defining the initial state of the reducer. */
const initialState: ErrorState = {};

/* Creating a reducer. */
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

/* Exporting the actions that are defined in the reducer. */
export const { save, clean } = errorReducer.actions;

/**
 * If there are no keys in the globalError object, return null, otherwise return the globalError
 * object.
 * @param {RootState} state - RootState - this is the state of the entire application.
 */
export const selectError = (state: RootState) =>
  Object.keys(state.globalError).length === 0 ? null : state.globalError;

/* Exporting the reducer. */
export default errorReducer.reducer;
