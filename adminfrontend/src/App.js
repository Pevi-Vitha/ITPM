import './App.css';
import './components/AdministratorManagement/css/dashboard.css'
import './components/AdministratorManagement/css/sidebar.css'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

import LandingPage from './components/LandingPage';
import UsersPaths from './components/UsersPaths';

import Dashboard from './components/AdministratorManagement/Dashboard';
import ManageUseres from './components/AdministratorManagement/ManageUsers';
import AddUser from './components/AdministratorManagement/AddUser';
import EditUser from './components/AdministratorManagement/EditUser';
import Backup from './components/AdministratorManagement/backup';
import Report from './components/AdministratorManagement/Report';

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/UsersPaths' element={<UsersPaths/>} />

            {/* Administrator Management */}
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Report' element={<Report/>} />
            <Route path='/ManageUseres' element={<ManageUseres/>} />
            <Route path='/AddUser' element={<AddUser/>} />
            <Route path='/EditUser/:id' element={<EditUser/>} />
            <Route path='/Backup' element={<Backup/>} />
          </Routes>
        </Router>
      </div>
  );
}
export default App;