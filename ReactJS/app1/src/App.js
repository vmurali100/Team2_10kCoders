
import './App.css';
import ClickCounter from './HOC comp/ClickCounter';
import { HOCComp } from './HOC comp/HOC.Comp';
import HoverCounter from './HOC comp/HoverCounter';



function App() {
  return (
    <div className="App">
     <HOCComp/>
     <ClickCounter/>
     <HoverCounter/>

      </div>
  );
}
export default App;