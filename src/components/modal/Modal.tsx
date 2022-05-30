import React from 'react';

import { useAppSelector } from '../../store/app/hooks';
import { useDispatch } from 'react-redux';

import ShareLocation from '../share-location-form/ShareLocationForm';

import { toggleModal } from '../../store/slices/modalPanelSlice';
import { resetInitialInput } from '../../store/slices/InitialInputSlice';

import classes from './modal.module.css';

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const editButtonClicked = useAppSelector(
    state => state.form.editButtonClicked
  );

  const backdropClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(resetInitialInput());
    !editButtonClicked && dispatch(toggleModal());
  };

  return (
    <>
      <ShareLocation />
      <div
        className={`${classes.backdrop}`}
        onClick={backdropClickHandler}
      ></div>
    </>
  );
};

export default Modal;
