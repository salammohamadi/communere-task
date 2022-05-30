import { createSlice } from '@reduxjs/toolkit';

export interface FormInfoEdit {
  locationClicked: boolean;
  locationName: string;
  locationType: string;
  locationLatLang: {
    lat: number;
    lng: number;
  };
  locationId: string;
  locationLogo: string;
}

const initialState: FormInfoEdit = {
  locationClicked: true,
  locationName: '',
  locationType: '',
  locationLatLang: {
    lat: 0,
    lng: 0,
  },
  locationId: '',
  locationLogo: '',
};

export const retrieveFormData = createSlice({
  name: 'formInfoEdit',
  initialState,
  reducers: {
    retrieveData: (state, action) => {
      state.locationClicked = action.payload.locationClicked;
      state.locationName = action.payload.locationName;
      state.locationType = action.payload.locationType;

      state.locationLatLang = {
        lat: action.payload.locationLat,
        lng: action.payload.locationLng,
      };
      state.locationId = action.payload.locationId;
      state.locationLogo = action.payload.locationLogo;
    },
  },
});

export const { retrieveData } = retrieveFormData.actions;

export default retrieveFormData.reducer;
