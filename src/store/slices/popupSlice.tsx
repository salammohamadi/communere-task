import { createSlice } from '@reduxjs/toolkit';

export interface ShowPopupContent {
  popupContentIsShown: boolean;
}

const initialState: ShowPopupContent = {
  popupContentIsShown: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopupContent: (state: ShowPopupContent) => {
      state.popupContentIsShown = true;
    },
    hidePopupContent: (state: ShowPopupContent) => {
      state.popupContentIsShown = false;
    },
    togglePopupContent: (state: ShowPopupContent) => {
      state.popupContentIsShown = !state.popupContentIsShown;
    },
  },
});

export const { togglePopupContent, showPopupContent, hidePopupContent } =
  popupSlice.actions;

export default popupSlice.reducer;
