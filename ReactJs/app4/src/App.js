import './App.css';
import RefsDemo from './Refs Practice/RefsDemo';
import RefsDemoCallBack from './Refs Practice/RefsDemoCallBack';
import ParentComponent from './PureComponents/ParentComponent';
import HoverCounter from './HigherOrderComponents/HoverCounter';
import ClickCounter from './HigherOrderComponent1/ClickCounter';
import HoverCounter1 from './HigherOrderComponent1/HoverCounter1';
import Counter from './RenderProps/Counter';
import ClickCounterTwo from './RenderProps/ClickCounterTwo';
function App() {
  return (
    <div className="App">
      {/* <RefsDemoCallBack />
      <RefsDemo />
      <ParentComponent />   */}
     {/* <ClickCounter ></ClickCounter>
    <HoverCounter /> */}
    {/* <ClickCounter />
    <HoverCounter1 /> */}
    <Counter render = {(count,incrementCount)=>
    <ClickCounterTwo count ={count} incrementCount ={incrementCount} /> } />
    
    </div>
  );
}

export default App;
