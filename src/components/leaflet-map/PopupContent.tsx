import { useAppSelector } from '../../store/app/hooks';
import { useDispatch } from 'react-redux';

import { editSharedLocation } from '../../store/slices/SharedLocationSlice';
import { toggleCancelButton } from '../../store/slices/ShareLocationFormSlice';
import { toggleModal } from '../../store/slices/modalPanelSlice';

import classes from './popupContent.module.css';

import communereLogo from '../../assets/logos/communereLogo.svg';
import { togglePopup } from '../../store/slices/leafletMapSlice';

const PopupContent: React.FC = () => {
  const SharedLocations = useAppSelector(state => state.sharedLocations);
  const dispatch = useDispatch();

  const popupEditClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const locationId = Number(
      event.currentTarget
        .closest('.leaflet-popup-content')
        ?.getElementsByClassName('location-popup')[0]
        .getAttribute('data-id')
    );

    dispatch(editSharedLocation(locationId));

    /*
    FIXME
    Just a workaround for canceling edit event
    instead get location information in modal panel when editing
    */

    // dispatch(toggleCancelButton());
    // dispatch(toggleModal());
  };

  const popupCloseClickHandler = (e: React.MouseEvent) => {
    dispatch(togglePopup());
    /*
    FIXME
    Feels like a workaround
    */
    // setPopupIsOpen(prevState => !prevState);
  };

  return (
    <div className={classes['popup-container']}>
      <header className={classes['popup-header']}>Location Details</header>
      {SharedLocations.map(
        location =>
          location.locationClicked && (
            <div className={classes['popup-location']} data-id={location.id}>
              <h2 className={classes['popup-location-item__name']}>
                {location.locationName}
              </h2>
              <div className={classes['popup-location-item__type']}>
                {location.locationType}
              </div>
              <div>
                <span className={classes['popup-location-item__logo']}>
                  <img
                    src={communereLogo}
                    alt={` ${location.locationName} logo`}
                  />
                </span>
              </div>
            </div>
          )
      )}

      <button
        className={`${classes['close-popup']} ${classes.btn}`}
        onClick={popupCloseClickHandler}
      >
        Close
      </button>

      <button
        className={`${classes['edit-popup']} ${classes.btn}`}
        onClick={popupEditClickHandler}
      >
        Edit
      </button>
    </div>
  );
};

export default PopupContent;
