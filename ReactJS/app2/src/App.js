import logo from './logo.svg';
import './App.css';
import { MusicComp } from './MusicComp';
import ParentComponent from '../../app4/src/RefComponent/ParentComponent';
import ComponentsContainer from './PureComponents/ComponetsContainer';

function App() {
  return (
    <div className="App">
      <h2>I am app.js</h2>
      {/* <ParentComponent/> */}
      <ComponentsContainer/>
     </div>
    
  );
}

export default App;
