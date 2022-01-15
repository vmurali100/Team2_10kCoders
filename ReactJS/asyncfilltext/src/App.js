import logo from './logo.svg';
import './App.css';
import Person from "./FILLTEXT/Person"
import Fakestore from './FAKESTORE/Fakestore';
import Json from './JSON/Json';
function App() {
  return (
    <div className="App">
      <Person /> <hr/>
      <Fakestore/> <hr/>
      <Json />
    </div>
  );
}

export default App;
