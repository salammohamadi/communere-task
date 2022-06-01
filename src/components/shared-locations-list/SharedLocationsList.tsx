import React from 'react';

import { useAppSelector } from '../../store/app/hooks';

import SharedLocationItem from './SharedLocationItem';

import classes from './SharedLocationsList.module.css';

const SharedLocationsList: React.FC = () => {
  const sharedLocations = useAppSelector(state => state.sharedLocations);

  return (
    <React.Fragment>
      <ul className={classes['location-list']}>
        {sharedLocations.map(location => (
          <li
            key={location.id}
            className='location-list-item'
            data-id={location.id}
          >
            <SharedLocationItem
              locationName={location.locationName}
              locationType={location.locationType}
              id={location.id}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SharedLocationsList;
