import { createSlice } from '@reduxjs/toolkit';

export interface PositionCoordsState {
  latitude: number;
  longitude: number;
}

const initialState: PositionCoordsState = {
  latitude: 51.2398657,
  longitude: -0.612081,
};

export const leafletMapSlice = createSlice({
  name: 'leaflet',
  initialState,
  reducers: {
    locatePosition: (state: PositionCoordsState, action) => {
      state.latitude = action.payload.lat;
      state.longitude = action.payload.lng;
    },
  },
});

export const { locatePosition } = leafletMapSlice.actions;

export default leafletMapSlice.reducer;
