import React from 'react';

import { useAppSelector } from '../../store/app/hooks';
import { useDispatch } from 'react-redux';

import { Icon } from 'leaflet';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
  Tooltip,
} from 'react-leaflet';

import { locatePosition } from '../../store/slices/leafletMapSlice';
import { toggleModal } from '../../store/slices/modalPanelSlice';
import { editSharedLocation } from '../../store/slices/SharedLocationSlice';

import communereLogo from '../../assets/logos/communereLogo.svg';

import './leaflet.css';
import { toggleCancelButton } from '../../store/slices/ShareLocationFormSlice';

const newMarker = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png',
  iconSize: [30, 30],
});

interface LeafletMapProps {
  panel: boolean;
}

const LeafletMap: React.FC<LeafletMapProps> = props => {
  const coords = useAppSelector(state => state.leaflet);
  const SharedLocations = useAppSelector(state => state.sharedLocations);

  const dispatch = useDispatch();

  function ViewPositionOnMap() {
    const map = useMap();
    map.setView([coords.latitude, coords.longitude], props.panel ? 15 : 30);

    const updateMap = useMapEvent('click', e => {
      const latLang = e.latlng;
      dispatch(locatePosition(latLang));
      dispatch(toggleModal());
      updateMap.setView([latLang.lat, latLang.lng], 15);
    });
    return null;
  }

  const popupCloseClickHandler = () => {
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
    <MapContainer
      center={[coords.latitude, coords.longitude]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />
      <Marker position={[coords.latitude, coords.longitude]} icon={newMarker}>
        <Popup className='popup'>
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
        </Popup>
        <Tooltip>Click on Marker to see location's Information</Tooltip>
      </Marker>

      {/* FIXME */}
      {/* Surviving Reload with saving
      location list items into localStorage*/}
      {/* {SharedLocations.map(location => (
        <Marker
          position={[
            location.locationLatLang.lat,
            location.locationLatLang.lng,
          ]}
          icon={newMarker}
        ></Marker>
      ))} */}
      <ViewPositionOnMap />
    </MapContainer>
  );
};

export default LeafletMap;
