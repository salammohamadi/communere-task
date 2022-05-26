import SharedLocationsList from '../../components/shared-locations-list/SharedLocationsList';

import classes from './SidebarLocations.module.css';

const SidebarLocations: React.FC = () => {
  return (
    <aside className={classes.sidebar}>
      <h1>Shared Locations</h1>
      <SharedLocationsList />
    </aside>
  );
};

export default SidebarLocations;
