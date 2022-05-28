import { createSlice } from '@reduxjs/toolkit';

export interface Input {
  inputValue: string;
  inputIsFocused: boolean;
  inputIsTouched: boolean;
}

const initialState: Input = {
  inputValue: '',
  inputIsFocused: false,
  inputIsTouched: false,
};

export const InputValidity = createSlice({
  name: 'inputValidation',
  initialState,
  reducers: {
    inputIsFocused: state => {
      state.inputIsFocused = true;
    },
    inputIsBlurred: state => {
      state.inputIsFocused = false;
    },
    inputIsTouched: state => {
      state.inputIsTouched = true;
    },
    inputReset: state => {
      state.inputValue = '';
      state.inputIsFocused = false;
      state.inputIsTouched = false;
    },
  },
});

export const { inputIsFocused, inputIsBlurred, inputIsTouched, inputReset } =
  InputValidity.actions;

export default InputValidity.reducer;
