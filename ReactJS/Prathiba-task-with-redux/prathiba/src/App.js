import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import Login from './Components/Login';
import { UserDashboard } from './Components/UserDashboard';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
