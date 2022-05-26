import CurrentLocationButton from './CurrentLocationButton';
import SidebarButton from './SidebarButton';
import SidebarMenuButton from './SidebarMenuButton';
import CurrentLocationMenuButton from './CurrentLocationMenuButton';

import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <h1>Share Your Location</h1>
      <CurrentLocationButton />
      <SidebarButton />
      <SidebarMenuButton />
      <CurrentLocationMenuButton />
    </header>
  );
};

export default Header;
