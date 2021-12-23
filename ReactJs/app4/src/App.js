import './App.css';
import ClassComponent1 from './ClassComponent1';
import ClassComponent2 from './ClassComponent2';
import { FunctionalComponent2 } from './FunctionalComponent2';
import { FunctionComponent1 } from './FunctionComponent1';

function App() {
  return (
    <div className="App">
      <h2>welcome to React JS</h2>
      <ClassComponent2 />
      <FunctionalComponent2 />
      <ClassComponent1 />
      <FunctionComponent1 />
      
    </div>
  );
}

export default App;
