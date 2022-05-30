import React from 'react';

import { useAppSelector } from '../../store/app/hooks';
import { useDispatch } from 'react-redux';

import PopupContent from './PopupContent';

import { toggleModal } from '../../store/slices/modalPanelSlice';

import { Icon } from 'leaflet';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from 'react-leaflet';

import {
  locatePosition,
  togglePopup,
} from '../../store/slices/leafletMapSlice';

import './leaflet.css';

const newMarker = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png',
  iconSize: [30, 30],
});

interface LeafletMapProps {
  panel: boolean;
}

const LeafletMap: React.FC<LeafletMapProps> = props => {
  const popupIsOpen = useAppSelector(state => state.leaflet.popupIsOpen);
  const coords = useAppSelector(state => state.leaflet);
  const dispatch = useDispatch();

  function ClickOnMap() {
    const map = useMap();
    map?.setView([coords.latitude, coords.longitude], props.panel ? 15 : 30);

    useMapEvent('click', e => {
      const latLang = e.latlng;
      dispatch(locatePosition(latLang));
      dispatch(toggleModal());
      map.setView([latLang.lat, latLang.lng], 15);
    });

    return null;
  }

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
      <Marker
        position={[coords.latitude, coords.longitude]}
        icon={newMarker}
        eventHandlers={{
          click: () => {
            dispatch(togglePopup());
          },
        }}
      />
      <Popup position={[coords.latitude, coords.longitude]}>
        {popupIsOpen && <PopupContent />}
        {!popupIsOpen && (
          <p className='popup-instruction'>
            Click on Marker to see location's Information
          </p>
        )}
      </Popup>

      {/* FIXME */}
      {/* Surviving Reload with saving
      location list items into localStorage*/}
      {/* {SharedLocations.map(location => (
        <Marker
          position={[
            location.locationLatLang.lat,
            location.locationLatLang.lng,
          ]}
          key={v4()}
          icon={newMarker}
        ></Marker>
      ))} */}
      <ClickOnMap />
    </MapContainer>
  );
};

export default LeafletMap;
