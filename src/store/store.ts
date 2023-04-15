import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/moviesSlice';

const rootReducer = combineReducers({
  moviesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
