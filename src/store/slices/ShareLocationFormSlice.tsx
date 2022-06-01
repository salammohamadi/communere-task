import { createSlice } from '@reduxjs/toolkit';

export interface ShareLocationForm {
  editButtonIsClicked: boolean;
  sharedLocationSaved: boolean;
  cancelButtonIsClicked: boolean;
}

const initialState: ShareLocationForm = {
  editButtonIsClicked: false,
  sharedLocationSaved: false,
  cancelButtonIsClicked: false,
};

export const ShareLocationFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    editButtonClicked: state => {
      state.editButtonIsClicked = !state.editButtonIsClicked;
    },
    // cancelButtonClicked: state => {
    //   state.cancelButtonIsClicked = !state.cancelButtonIsClicked;
    // },
    saveSharedLocation: state => {
      state.sharedLocationSaved = true;
    },
    cancelSavingSharedLocation: state => {
      state.sharedLocationSaved = false;
    },
  },
});

export const {
  editButtonClicked,
  saveSharedLocation,
  cancelSavingSharedLocation,
} = ShareLocationFormSlice.actions;

export default ShareLocationFormSlice.reducer;
