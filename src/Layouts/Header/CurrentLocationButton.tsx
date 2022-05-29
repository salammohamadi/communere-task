import React from 'react';

import classes from './Header.module.css';

import { useDispatch } from 'react-redux';
import { locatePosition } from '../../store/slices/leafletMapSlice';
import { resetClickedLocation } from '../../store/slices/SharedLocationSlice';

const CurrentLocationButton: React.FC = () => {
  const dispatch = useDispatch();

  const CurrentLocationButtonHandler = () => {
    const SanandajCoords = { lat: 35.3119, lng: 46.9964 };

    dispatch(locatePosition(SanandajCoords));
    dispatch(resetClickedLocation());

    // FIXME
    // does not get geolocation API

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude = 35.3119 } = position.coords;
        const { longitude = 46.9964 } = position.coords;
        dispatch(locatePosition({ lat: latitude, lng: longitude }));
        dispatch(resetClickedLocation());
      },
      () => {
        console.log('Could not get your position');
      }
    );
  };

  return (
    <button
      className={`${classes.button}`}
      onClick={CurrentLocationButtonHandler}
    >
      My Location
    </button>
  );
};

export default CurrentLocationButton;
