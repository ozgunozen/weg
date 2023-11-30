import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { logger } from './logger';

import listReducer from './listSlice';

export const makeStore = () => configureStore({
  reducer: {
    list: listReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
