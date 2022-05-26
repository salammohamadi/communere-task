import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/slices/ShowSidebarSlice';

import classes from './Header.module.css';

const ShowSidebarButton: React.FC = () => {
  const dispatch = useDispatch();

  const showSidebarButtonHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <button className={classes.button} onClick={showSidebarButtonHandler}>
      Shared Locations
    </button>
  );
};

export default ShowSidebarButton;
