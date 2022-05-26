import menuButton from '../../assets/ions/menu-outline.svg';
import closeButton from '../../assets/ions/close.svg';

import { useDispatch } from 'react-redux';

import classes from './menuButton.module.css';

import { toggleSidebar } from '../../store/slices/ShowSidebarSlice';
import { useAppSelector } from '../../store/app/hooks';

const ShowSidebarMenuButton = () => {
  const sidebarIsOpen = useAppSelector(state => state.sidebar.sidebarIsShown);
  const dispatch = useDispatch();

  const menuButtonClickHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <button
      className={`${classes['menu--btn']} ${classes['button']} `}
      onClick={menuButtonClickHandler}
    >
      {!sidebarIsOpen && <img src={menuButton} alt='mobile menu button' />}
      {sidebarIsOpen && (
        <img src={closeButton} alt='mobile close menu button' />
      )}
    </button>
  );
};

export default ShowSidebarMenuButton;
