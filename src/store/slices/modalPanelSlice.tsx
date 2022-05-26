import { createSlice } from '@reduxjs/toolkit';

export interface ShowModal {
  modalIsShown: boolean;
}

const initialState: ShowModal = {
  modalIsShown: false,
};

export const modalIsShown = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    toggleModal: (state: ShowModal) => {
      state.modalIsShown = !state.modalIsShown;
    },
  },
});

export const { toggleModal } = modalIsShown.actions;

export default modalIsShown.reducer;
