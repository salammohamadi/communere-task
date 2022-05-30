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

export const InitialInputSlice = createSlice({
  name: 'inputValidation',
  initialState,
  reducers: {
    resetInitialInput: state => {
      state.inputValue = '';
      state.inputIsFocused = false;
      state.inputIsTouched = false;
    },
  },
});

export const { resetInitialInput } = InitialInputSlice.actions;

export default InitialInputSlice.reducer;
