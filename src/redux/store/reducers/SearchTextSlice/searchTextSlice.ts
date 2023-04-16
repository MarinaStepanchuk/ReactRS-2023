import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearchText {
  searchText: string;
}

export const initialState: ISearchText = {
  searchText: '',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    saveText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export default searchTextSlice.reducer;
