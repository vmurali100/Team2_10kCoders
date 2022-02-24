import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavComp } from './Components/NavComp';
import { HomePage } from './Components/HomePage';
import  Login  from './Components/Login-Register';
import { Footer } from './Components/Footer';
import {axios} from 'axios'
import { ExamListPage } from './Components/ExamListPage';
import  ProfilePage  from './Components/ProfilePage';

 

function App() {
  return (
    <div className="App">
      <NavComp/>
    <Routes>
    <Route path="" element={<Login/>}></Route> 
      <Route path='homepage' element={<HomePage />}></Route>
      <Route path='examlist' element={<ExamListPage />} />
      <Route path='profilepage' element={<ProfilePage/>} />
    </Routes>
    <Footer />
 
    </div>
  );
}

export default App;
