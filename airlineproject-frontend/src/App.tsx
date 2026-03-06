import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AircraftDetail from './pages/AircraftDetail'
import ContentManager from './pages/ContentManager'
import Dashboard from './pages/Dashboard'
import AdminCommands from './pages/AdminCommands'
import SignIn from './pages/SignIn'
import NavBar from './components/NavBar'
import ContentDetail from './pages/ContentDetail'
import DistributionManager from './pages/DistributionManager'
import DistributionDetail from './pages/DistributionDetail'

function App(){
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/' element = {<Dashboard />} />
        <Route path = '/aircraft/:tailNumber' element = {<AircraftDetail />} />
        <Route path = '/content' element = {<ContentManager />} />
        <Route path = '/admin' element = {<AdminCommands />} />
        <Route path = '/signin' element = {<SignIn />} />
        <Route path = '/content/:namevar' element = {<ContentDetail />} />
        <Route path = '/distribution' element = {<DistributionManager />} />
        <Route path = '/distribution/:aircraftId/:contentId' element = {<DistributionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App