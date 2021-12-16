import logo from './logo.svg';
import './App.css';
import { Post } from './Class Components/Post';
import { Hook } from './Functional Components/Hook';
import { Players } from './Functional Components/Players';
import { Persons } from './Functional Components/Persons';

function App() {
  return (
    <div className="App">
    <Post/>
    <Hook/>
    <Players/>
    <Persons/>
    </div>
  );
}

export default App;
