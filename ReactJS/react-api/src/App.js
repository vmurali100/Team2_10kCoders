import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';
import { JsonPost } from './Components/JsonPost';
import {JsonComments} from "./Components/JsonComments";
import { JsonAlbums } from './Components/JsonAlbums';
import { JsonPhotos } from "./Components/JsonPhotos";
import { JsonTodos } from "./Components/JsonTodos";

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <header>
          <ul>
            <li><Link to="/json-post">Json-post</Link></li>
            <li><Link to="/json-comments">Json-comments</Link></li>
            <li><Link to="/json-albums">Json-albums</Link></li>
            <li><Link to="/json-photos">Json-Photos</Link></li>
            <li><Link to="/json-todos">Json-Todos</Link></li>
          </ul>
        </header>
        <Routes>
          <Route path="/json-post" element={<JsonPost />}></Route>
          <Route path="/json-comments" element={<JsonComments />}></Route>
          <Route path="/json-albums" element={<JsonAlbums />}></Route>
          <Route path="/json-photos" element={<JsonPhotos />}></Route>
          <Route path="/json-todos" element={<JsonTodos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
