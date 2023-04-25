import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IModalSlice {
  idCard: string;
}

export const initialState: IModalSlice = {
  idCard: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action: PayloadAction<string>) {
      state.idCard = action.payload;
    },
    closeModal(state) {
      state.idCard = '';
    },
  },
});

const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
export { showModal, closeModal };
