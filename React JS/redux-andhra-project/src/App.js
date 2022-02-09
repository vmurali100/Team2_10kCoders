import logo from './logo.svg';
import './App.css';
import { Reducer } from './Reducer';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import  Home  from './Components/Home';
import {Provider} from 'react-redux'
import Register from './Components/Register';
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import  Login  from './Components/Login';
import Bar from './Components/Bar';
import Admin from './Components/Admin';
import AdminDash from './Components/AdminDash';
import Edit from './Components/Edit';
import Addnewdist from './Components/Addnewdist';

function App() {


 

  return (
    <div className="App">
   
    <BrowserRouter>
        <Bar />
        {/* <Home />  */}
        <Routes>
          <Route path="" element={ <Home /> }  />
          {/* <Route path="" /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="adminlogin" element={<Admin />} />
          <Route path="admindashboard" element={<AdminDash />}  />
          <Route path="admindashboard/edit" element={<Edit />}  />
            {/* <Route path="admindashboard/userslist" element={<UsersList />} /> */}
            {/* <Route path="admindashboard/districtslist" element={<DistrictsList />} /> */}
            <Route path="admindashboard/addnew" element={<Addnewdist />} />
            {/* <Route path="admindashboard/districtslist/edit" element={ <Edit/>}/> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;