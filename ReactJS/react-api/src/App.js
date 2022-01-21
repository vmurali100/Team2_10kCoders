import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';
import { JsonPost } from './Components/JsonPost';
import {JsonComments} from "./Components/JsonComments"
import { JsonAlbums } from './Components/JsonAlbums';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <header>
          <ul>
            <li><Link to="/json-post">Json-post</Link></li>
            <li><Link to="/json-comments">Json-comments</Link></li>
            <li><Link to="/json-albums">Json-albums</Link></li>
          </ul>
        </header>
        <Routes>
          <Route path="/json-post" element={<JsonPost />}></Route>
          <Route path="/json-comments" element={<JsonComments />}></Route>
          <Route path="/json-albums" element={<JsonAlbums />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
