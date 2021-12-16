import logo from './logo.svg';
import './App.css';
import { Post } from './Class Components/Post';
import { Hook } from './Functional Components/Hook';
import { Students } from './Functional Components/Students';
import { Employees } from './Functional Components/Employees';

function App() {
  return (
    <div className="App">
     <Post/>
     <Hook/>
     <Students/>
     <Employees/>
    </div>
  );
}

export default App;
