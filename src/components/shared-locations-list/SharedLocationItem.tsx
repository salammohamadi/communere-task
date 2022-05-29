import React from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../store/app/hooks';

import { locatePosition } from '../../store/slices/leafletMapSlice';
import {
  resetClickedLocation,
  sharedLocationClicked,
} from '../../store/slices/SharedLocationSlice';

import communereLogo from '../../assets/logos/communereLogo.svg';

import classes from './SharedLocationItem.module.css';

interface SharedLocationProps {
  locationName: string;
  locationType: string;
  id: number;
}

const SharedLocationItem: React.FC<SharedLocationProps> = props => {
  const sharedLocations = useAppSelector(state => state.sharedLocations);
  const dispatch = useDispatch();

  const locationListItemClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const locationId = Number(
      event.currentTarget
        .closest('.location-list-item')
        ?.getAttribute('data-id')
    );

    const [clickedLocation] = sharedLocations.filter(
      location => location.id === locationId
    );

    console.log(clickedLocation.locationLatLang);

    dispatch(locatePosition(clickedLocation.locationLatLang));
    dispatch(resetClickedLocation());
    dispatch(sharedLocationClicked(clickedLocation.id));
  };

  return (
    <button
      className={classes['location-list-item']}
      onClick={locationListItemClickHandler}
    >
      <h2 className={classes['location-list-item__name']}>
        {props.locationName}
      </h2>
      <div className={classes['location-list-item__type']}>
        {props.locationType}
      </div>
      <div>
        <span className={classes['location-list-item__logo']}>
          <img src={communereLogo} alt={` ${props.locationName} logo`} />
        </span>
      </div>
    </button>
  );
};

export default SharedLocationItem;
