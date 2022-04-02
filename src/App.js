
import CommingSoon from './CommingSoon';
import './App.css';
import UnderMaintenance from './UnderMaintenance';

const COMMING_SOON = 'comming_soon'
const UNDER_MAINTENANCE = 'under_maintenanta'
const SELECTED_INTERFACE = COMMING_SOON

function Greeting() {
  switch (SELECTED_INTERFACE) {
    case COMMING_SOON: return <CommingSoon/>
    case UNDER_MAINTENANCE: return <UnderMaintenance />
  }
}

function App() {
  return (Greeting())
}

export default App;
