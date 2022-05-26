import Header from './Header/Header';
import ModalPanel from '../components/modal/Modal';
import LeafletMap from '../components/leaflet-map/LeafletMap';
import SidebarLocations from './Sidebar/SidebarLocations';

import { useAppSelector } from '../store/app/hooks';

import 'leaflet/dist/leaflet.css';

function App() {
  const showModal = useAppSelector(state => state.modal.modalIsShown);
  const displaySidebar = useAppSelector(state => state.sidebar.sidebarIsShown);

  return (
    <div className='App'>
      <Header />
      {displaySidebar && <SidebarLocations />}
      <LeafletMap panel={true} />
      {showModal && <ModalPanel />}
    </div>
  );
}

export default App;
