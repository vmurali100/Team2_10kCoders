import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';
import { JsonPost } from './Components/JsonPost';
import {JsonComments} from "./Components/JsonComments";
import { JsonAlbums } from './Components/JsonAlbums';
import { JsonPhotos } from "./Components/JsonPhotos";
import { JsonTodos } from "./Components/JsonTodos";
import { JsonUsers } from "./Components/JsonUsers"
import { Navbar } from "./Components/Navbar";
import { FakeStoreProducts } from "./Components/FakeStoreProducts";
import { FakeStoreCart } from "./Components/FakeStoreCart";
import { FakeStoreUsers } from "./Components/FakeStoreUsers";
import { FilltextName } from "./Components/FilltextName";
import { FilltextPerson } from "./Components/FilltextPerson";
import { FilltextAuth } from "./Components/FilltextAuth";

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        {/* <header>
          <ul>
            <li><Link to="/json-post">Json-post</Link></li>
            <li><Link to="/json-comments">Json-comments</Link></li>
            <li><Link to="/json-albums">Json-albums</Link></li>
            <li><Link to="/json-photos">Json-Photos</Link></li>
            <li><Link to="/json-users">Json-Users</Link></li>
          </ul>
        </header> */}
        <Navbar />
        <Routes>
          <Route path="/json-post" element={<JsonPost />}></Route>
          <Route path="/json-comments" element={<JsonComments />}></Route>
          <Route path="/json-albums" element={<JsonAlbums />}></Route>
          <Route path="/json-photos" element={<JsonPhotos />}></Route>
          <Route path="/json-todos" element={<JsonTodos />}></Route>
          <Route path="/json-users" element={<JsonUsers />}></Route>
          <Route path="/fakestore-products" element={<FakeStoreProducts />}></Route>
          <Route path="/fakestore-carts" element={<FakeStoreCart />}></Route>
          <Route path="/fakestore-users" element={<FakeStoreUsers />}></Route>
          <Route path="/filltext-name" element={<FilltextName />}></Route>
          <Route path="/filltext-persons" element={<FilltextPerson />}></Route>
          <Route path="/filltext-auth" element={<FilltextAuth />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
