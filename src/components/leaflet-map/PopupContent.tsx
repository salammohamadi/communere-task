import { useAppSelector } from '../../store/app/hooks';
import { useDispatch } from 'react-redux';

import { editSharedLocation } from '../../store/slices/SharedLocationSlice';
import { toggleCancelButton } from '../../store/slices/ShareLocationFormSlice';
import { toggleModal } from '../../store/slices/modalPanelSlice';

import communereLogo from '../../assets/logos/communereLogo.svg';

const PopupContent: React.FC = () => {
  const SharedLocations = useAppSelector(state => state.sharedLocations);
  const dispatch = useDispatch();

  const popupCloseClickHandler = (e: React.MouseEvent) => {
    // @ts-ignore
    Marker.propTypes?.eventHandlers.popupclose();
    // dispatch(closePopup());
    /*
    BUG
    Add Popup close event
    */
  };

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
    dispatch(toggleCancelButton());
    dispatch(toggleModal());
  };

  return (
    <div className='popup-content'>
      <header className='popup-header'>Location Details</header>
      {SharedLocations.map(
        location =>
          location.locationClicked && (
            <div className='location-popup' data-id={location.id}>
              <h2 className={'location-popup-item__name'}>
                {location.locationName}
              </h2>
              <div className={'location-popup-item__type'}>
                {location.locationType}
              </div>
              <div>
                <span className={'location-popup-item__logo'}>
                  <img
                    src={communereLogo}
                    alt={` ${location.locationName} logo`}
                  />
                </span>
              </div>
            </div>
          )
      )}
      <button className='close-popup btn' onClick={popupCloseClickHandler}>
        Close
      </button>
      <button className='edit-popup btn' onClick={popupEditClickHandler}>
        Edit
      </button>
    </div>
  );
};

export default PopupContent;
