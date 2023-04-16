import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchTextSlice/searchTextSlice';
import modalReducer from './reducers/ModalSlice/modalSlice';
import critiquesReducer from './reducers/CritiquesSlice/critiquesSlice';
import { moviesApi } from '../services/MoviesService';

export const store = configureStore({
  reducer: {
    searchReducer,
    modalReducer,
    critiquesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
