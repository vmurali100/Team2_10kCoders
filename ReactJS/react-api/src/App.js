import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';
import { JsonPost } from './Components/JsonPost';
import {JsonComments} from "./Components/JsonComments"

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <header>
          <ul>
            <li><Link to="/json-post">Json-post</Link></li>
            <li><Link to="/json-comments">Json-comments</Link></li>
          </ul>
        </header>
        <Routes>
          <Route path="/json-post" element={<JsonPost />}></Route>
          <Route path="/json-comments" element={<JsonComments />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
