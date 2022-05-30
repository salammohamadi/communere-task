import { configureStore } from '@reduxjs/toolkit';
import leafletReducer from './slices/leafletMapSlice';
import modalReducer from './slices/modalPanelSlice';
import sharedLocationsReducer from './slices/SharedLocationSlice';
import sidebarReducer from './slices/ShowSidebarSlice';
import formReducer from './slices/ShareLocationFormSlice';
import inputReducer from './slices/InitialInputSlice';
import editSharedLocation from './slices/retrieveFormDataSlice';

const store = configureStore({
  reducer: {
    leaflet: leafletReducer,
    modal: modalReducer,
    sharedLocations: sharedLocationsReducer,
    sidebar: sidebarReducer,
    form: formReducer,
    input: inputReducer,
    selectedLocation: editSharedLocation,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
