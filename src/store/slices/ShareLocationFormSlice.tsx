import { createSlice } from '@reduxjs/toolkit';

export interface ShareLocationForm {
  formIsValid: boolean;
  inputIsFocused: boolean;
  inputIsValid: boolean;
  editButtonClicked: boolean;
}

const initialState: ShareLocationForm = {
  formIsValid: false,
  inputIsFocused: false,
  inputIsValid: false,
  editButtonClicked: false,
};

export const FormIsValid = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    unValidInput: state => {
      state.formIsValid = false;
    },
    validInput: state => {
      state.inputIsValid = true;
    },

    focusInput: state => {
      state.inputIsFocused = true;
    },
    blurInput: state => {
      state.inputIsFocused = false;
    },

    resetFormValidity: state => {
      state.formIsValid = false;
      state.inputIsFocused = false;
      state.inputIsValid = false;
    },

    toggleCancelButton: state => {
      state.editButtonClicked = !state.editButtonClicked;
    },
  },
});

export const {
  focusInput,
  blurInput,
  validInput,
  unValidInput,
  resetFormValidity,
  toggleCancelButton,
} = FormIsValid.actions;

export default FormIsValid.reducer;
