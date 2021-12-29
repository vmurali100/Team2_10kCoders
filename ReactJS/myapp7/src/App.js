import logo from './logo.svg';
import './App.css';
import RandomImg from './HigherOrderComponent/RandomImg';
import { Child } from './Context/Child';
import { Parent1 } from './Context/Parent1';

function App() {
  return (
    <div className="App">
     {/* <RandomImg /> */}
     {/* <Child /> */}
     <Parent1 />
    </div>
  );
}

export default App;
