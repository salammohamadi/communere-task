import React from 'react';
import { useDispatch } from 'react-redux';

import ShareLocation from '../share-location-form/ShareLocationForm';

import { resetFormValidity } from '../../store/slices/ShareLocationFormSlice';
import { toggleModal } from '../../store/slices/modalPanelSlice';

import classes from './modal.module.css';

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const backdropClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(toggleModal());
    dispatch(resetFormValidity());
  };

  return (
    <React.Fragment>
      <ShareLocation />
      <div
        className={`${classes.backdrop}`}
        onClick={backdropClickHandler}
      ></div>
    </React.Fragment>
  );
};

export default Modal;
