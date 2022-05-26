import menuCurrentLocationButton from '../../assets/ions/location.svg';

import { useDispatch } from 'react-redux';

import { locatePosition } from '../../store/slices/leafletMapSlice';

import classes from './menuButton.module.css';

const CurrentLocationMenuButton = () => {
  const dispatch = useDispatch();

  const menuCurrentLocationButtonClickHandler = () => {
    const coords = { lat: 35.3119, lng: 46.9964 };
    dispatch(locatePosition(coords));

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        // const coords = { lat: latitude, lng: longitude };

        // dispatch(locatePosition(coords));
      },
      () => {
        console.log('Could not get your position');
      }
    );
  };

  return (
    <button
      className={`${classes['location--btn']} ${classes['button']} `}
      onClick={menuCurrentLocationButtonClickHandler}
    >
      <img
        src={menuCurrentLocationButton}
        alt='mobile current location button'
      />
    </button>
  );
};

export default CurrentLocationMenuButton;
