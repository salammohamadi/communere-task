import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { locatePosition } from '../../store/slices/leafletMapSlice';
import { resetClickedLocation } from '../../store/slices/SharedLocationSlice';
import { saveSharedLocation } from '../../store/slices/ShareLocationFormSlice';

import menuCurrentLocationButton from '../../assets/ions/location.svg';

import classes from './menuButton.module.css';

const CurrentLocationMenuButton: React.FC = () => {
  const dispatch = useDispatch();

  let latitude: number;
  let longitude: number;

  const latLang = useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      },
      () => {
        // FIXME
        // Add Error Component !!
        const SanandajCoords = { latitude: 35.3119, longitude: 46.9964 };

        latitude = SanandajCoords.latitude;
        longitude = SanandajCoords.longitude;

        console.log(`Can't get your position`);
      }
    );
  }, []);

  const CurrentLocationButtonHandler = () => {
    dispatch(locatePosition({ lat: latitude, lng: longitude }));
    dispatch(resetClickedLocation());
    dispatch(saveSharedLocation());
  };

  return (
    <button
      className={`${classes['location--btn']} ${classes['button']} `}
      onClick={CurrentLocationButtonHandler}
    >
      <img
        src={menuCurrentLocationButton}
        alt='mobile current location button'
      />
    </button>
  );
};

export default CurrentLocationMenuButton;
