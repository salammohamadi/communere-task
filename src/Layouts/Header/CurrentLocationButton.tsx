import React from 'react';

import { useDispatch } from 'react-redux';
import { locatePosition } from '../../store/slices/leafletMapSlice';
import { resetClickedLocation } from '../../store/slices/SharedLocationSlice';
import { sharedLocationSaved } from '../../store/slices/ShareLocationFormSlice';

import classes from './Header.module.css';

const CurrentLocationButton: React.FC = () => {
  const dispatch = useDispatch();

  const CurrentLocationButtonHandler = () => {
    const SanandajCoords = { lat: 35.3119, lng: 46.9964 };

    // FIXME
    // does not getting geolocation API !!

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude = 35.3119 } = position.coords;
        const { longitude = 46.9964 } = position.coords;
        dispatch(locatePosition({ lat: latitude, lng: longitude }));
        dispatch(resetClickedLocation());
        dispatch(sharedLocationSaved());
      },
      () => {
        // BUG
        // Just a workaround.
        dispatch(sharedLocationSaved());
        dispatch(locatePosition(SanandajCoords));
        dispatch(resetClickedLocation());

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
