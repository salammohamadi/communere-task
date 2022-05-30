import { createSlice } from '@reduxjs/toolkit';

export interface ShareLocationForm {
  editButtonClicked: boolean;
  sharedLocationSaved: boolean;
}

const initialState: ShareLocationForm = {
  editButtonClicked: false,
  sharedLocationSaved: true,
};

export const editButtonIsClicked = createSlice({
  name: 'form',
  initialState,
  reducers: {
    toggleEditButtonClicked: state => {
      state.editButtonClicked = !state.editButtonClicked;
    },
    sharedLocationSaved: state => {
      state.sharedLocationSaved = !state.sharedLocationSaved;
    },
  },
});

export const { toggleEditButtonClicked, sharedLocationSaved } =
  editButtonIsClicked.actions;

export default editButtonIsClicked.reducer;
