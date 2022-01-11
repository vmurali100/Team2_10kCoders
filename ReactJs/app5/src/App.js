import logo from './logo.svg';
import './App.css';
import { User } from './User';
import LifeCycleCompB from './lifecycles/lifecyclecompB';
import LifeCycleCompA from './lifecycles/lifecyclecompA';
import ClickCounter from './higherordercomponents/ClickCounter';
import HoverCounter from './higherordercomponents/HoverCounter';
import { Hordercomp } from './higherordercomponents/Hordercomp';
import rootReducer from './redux/reducer';
import Todos from './Todos';
import { ContainerComp } from './contextapi/ContainerComp';

function App() {
  return (
    <div className="App">
   
    {/* <LifeCycleCompB/> */}
    {/* <ClickCounter/> */}
    <hr/>
    {/* <HoverCounter/> */}
    {/* <Hordercomp/> */}
    {/* <ContainerComp/> */}
    
    {/* <Todos/> */}
    <User/>
    </div>
  );
}

export default App;
