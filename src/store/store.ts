import { configureStore } from '@reduxjs/toolkit';
import leafletReducer from './slices/leafletMapSlice';
import modalReducer from './slices/modalPanelSlice';
import sharedLocationsReducer from './slices/SharedLocationSlice';
import sidebarReducer from './slices/ShowSidebarSlice';
import formReducer from './slices/ShareLocationFormSlice';
import inputValidityReducer from './slices/InputValiditySlice';

const store = configureStore({
  reducer: {
    leaflet: leafletReducer,
    modal: modalReducer,
    sharedLocations: sharedLocationsReducer,
    sidebar: sidebarReducer,
    form: formReducer,
    input: inputValidityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
