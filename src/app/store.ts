import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import earningsData from '../screens/Earnings/slices/earningsData'

export const store = configureStore({
  reducer: {
    earningsData
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
