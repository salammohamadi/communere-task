import { configureStore } from '@reduxjs/toolkit';
import leafletReducer from './slices/leafletMapSlice';
import modalReducer from './slices/modalPanelSlice';
import sharedLocationsReducer from './slices/SharedLocationSlice';
import sidebarReducer from './slices/ShowSidebarSlice';
import formReducer from './slices/ShareLocationFormSlice';
import retrieveFormDataReducer from './slices/retrieveSelectedLocationDataSlice';
import inputReducer from './slices/InitialInputSlice';
import selectedLocationReducer from './slices/retrieveSelectedLocationDataSlice';
import popupReducer from './slices/popupSlice';

const store = configureStore({
  reducer: {
    leaflet: leafletReducer,
    modal: modalReducer,
    sharedLocations: sharedLocationsReducer,
    sidebar: sidebarReducer,
    form: formReducer,
    formDate: retrieveFormDataReducer,
    input: inputReducer,
    selectedLocation: selectedLocationReducer,
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
