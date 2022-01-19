import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from '../../react_router/src/Home';
import { Users } from '../../react_router/src/Users';
import { About } from '../../react_router/src/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="users" element={<Users />}/>
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

export default App;
