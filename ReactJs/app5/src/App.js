import logo from './logo.svg';
import './App.css';
import { User } from './User';
import { Students } from './Students';
import { ClassRoom } from './Student';
import LifeCycleCompB from './lifecycles/lifecyclecompB';
import LifeCycleCompA from './lifecycles/lifecyclecompA';
import ClickCounter from './higherordercomponents/ClickCounter';
import HoverCounter from './higherordercomponents/HoverCounter';

function App() {
  return (
    <div className="App">
   
    {/* <LifeCycleCompB/> */}
    <ClickCounter/>
    <hr/>
    <HoverCounter/>
    </div>
  );
}

export default App;
