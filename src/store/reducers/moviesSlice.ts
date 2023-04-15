import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../../types/interfaces';

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  error: string;
  searchText: string;
}

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  error: '',
  searchText: '',
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    saveText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export default moviesSlice.reducer;
