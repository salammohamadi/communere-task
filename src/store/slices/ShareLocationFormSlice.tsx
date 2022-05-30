import { createSlice } from '@reduxjs/toolkit';

export interface ShareLocationForm {
  editButtonClicked: boolean;
}

const initialState: ShareLocationForm = {
  editButtonClicked: false,
};

export const editButtonIsClicked = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    toggleCancelButton: state => {
      state.editButtonClicked = !state.editButtonClicked;
    },
  },
});

export const { toggleCancelButton } = editButtonIsClicked.actions;

export default editButtonIsClicked.reducer;
