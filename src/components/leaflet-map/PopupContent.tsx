import { useAppSelector } from '../../store/app/hooks';
import { useDispatch } from 'react-redux';

import { toggleModal } from '../../store/slices/modalPanelSlice';
import { togglePopup } from '../../store/slices/leafletMapSlice';

import communereLogo from '../../assets/logos/communereLogo.svg';

import classes from './popupContent.module.css';

import { hidePopupContent } from '../../store/slices/popupSlice';

const PopupContent: React.FC = () => {
  const selectedLocation = useAppSelector(state => state.selectedLocation);
  const popupContentIsShown = useAppSelector(
    state => state.selectedLocation.locationSaved
  );

  const dispatch = useDispatch();

  const popupEditClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    dispatch(togglePopup());

    dispatch(toggleModal());
  };

  const popupCloseClickHandler = () => {
    dispatch(hidePopupContent());
    dispatch(togglePopup());
  };

  return (
    <div
      className={`${classes['location-popup-container']} location-popup-container`}
    >
      <header className={classes['popup-header']}>Location Details</header>
      {!popupContentIsShown && (
        <p className={classes['add-popup-location']}>
          Not Shared Location Yet !
        </p>
      )}
      {popupContentIsShown && (
        <div
          className={`${classes['popup-location']} popup-location`}
          data-id={selectedLocation.locationId}
        >
          <h2 className={classes['popup-location-item__name']}>
            {selectedLocation.locationName}
          </h2>
          <div className={classes['popup-location-item__type']}>
            {selectedLocation.locationType}
          </div>
          <div>
            <span className={classes['popup-location-item__logo']}>
              <img
                src={communereLogo}
                alt={` ${selectedLocation.locationName} logo`}
              />
            </span>
          </div>
        </div>
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
