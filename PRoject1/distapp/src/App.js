import logo from './logo.svg';
import './App.css';
import { DistrictDetails } from './DistrictDetails';

function App() {
  return (
    <div>
      <nav className="py-2 bg-light border-bottom">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
      
      </ul>
      <ul className="nav">
        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Login</a></li>
        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Sign up</a></li>
      </ul>
    </div>
  </nav>
  <DistrictDetails />
    </div>
  );
}

export default App;
