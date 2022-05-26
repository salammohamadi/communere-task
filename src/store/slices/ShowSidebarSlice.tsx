import { createSlice } from '@reduxjs/toolkit';

export interface sidebarDisplay {
  sidebarIsShown: boolean;
}

const initialState: sidebarDisplay = {
  sidebarIsShown: false,
};

export const ShowSidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.sidebarIsShown = !state.sidebarIsShown;
    },
  },
});

export const { toggleSidebar } = ShowSidebarSlice.actions;

export default ShowSidebarSlice.reducer;
