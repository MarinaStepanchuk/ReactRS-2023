import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICritique } from '../../../../types/interfaces';

interface ICritiquesSlice {
  cards: Array<ICritique>;
  showSendMessage: boolean;
}

export const initialState: ICritiquesSlice = {
  cards: [],
  showSendMessage: false,
};

export const critiquesSlice = createSlice({
  name: 'critiques',
  initialState,
  reducers: {
    showMessage(state) {
      state.showSendMessage = true;
    },
    sendCard(state, action: PayloadAction<ICritique>) {
      state.showSendMessage = false;
      state.cards = state.cards.concat(action.payload);
    },
  },
});

export default critiquesSlice.reducer;
