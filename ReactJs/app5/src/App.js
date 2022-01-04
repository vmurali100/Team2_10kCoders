
import './App.css';

import ParentComponent from './Assignment Of HOC Components/ParentComponent';

import ParentComponent2 from './Assignment Of HOC Components/HOC with PureComponents/ParentComponent2';
import ParentComponent3 from './Assignment Of HOC Components/HOC with PureCpmnt2/ParentComponent3';
import Reference1 from './Assignment on References/Reference1';
import Reference2 from './Assignment on References/Reference2';
import Reference3 from './Assignment on References/Reference3';
import Reference4 from './Assignment on References/Reference4';
import RenderProp from './RenderProps Assignment/RenderProps1/RenderProp';
import ClickCounter from './RenderProps Assignment/RenderProps1/ClickCounter';
import HoverCounter from './RenderProps Assignment/RenderProps1/HoverCounter';
import RenderPrompComponent from './RenderProps Assignment/RenderProps2/RenderPrompComponent';
import HoverCounter1 from './RenderProps Assignment/RenderProps2/HoverCounter1';
import RenderPropsComponent3 from './RenderProps Assignment/RenderProps3/RenderPropsComponent3';
import ClickCounter2 from './RenderProps Assignment/RenderProps3/ClickCounter2';
import HoverComponent2 from './RenderProps Assignment/RenderProps3/HoverComponent2';
import ComponentA from './ContextApIs Assignment/ContextApi-1/ComponentA';
import { UserProvider } from './ContextApIs Assignment/ContextApi-1/ContextApi.Component';
import { UserProvider2 } from './ContextApIs Assignment/ContextApi-2/ContextApi2';
import ComponentA1 from './ContextApIs Assignment/ContextApi-2/ComponentA1';

function App() {
  return (
    // <div className="App">
    //   <ParentComponent />
    //   <ParentComponent2 />
    //   <ParentComponent3 />
    //   <Reference1 />
    //   <Reference2 />
    //   <Reference3 />
    //   <Reference4 />

    //   <h1>Assignment3 RenderProps</h1>
    //   <RenderProp render={(count,incrementCounter)=>
    //   <ClickCounter count={count} incrementCounter ={incrementCounter}></ClickCounter>}>
    //   </RenderProp>

    //   <RenderProp render={(count,incrementCounter)=>{
    //     return <HoverCounter count={count} incrementCounter={incrementCounter}></HoverCounter>
    //   }}></RenderProp>

    //   <h2>Assignment3.1</h2>
    //   <RenderPrompComponent render={(count,incrementCounter)=>{
    //     return <ClickCounter count={count} incrementCounter={incrementCounter} />
    //   }}></RenderPrompComponent>
    //   <RenderPrompComponent render ={(count,incrementCounter)=>{
    //     return <HoverCounter1 count ={count} incrementCounter={incrementCounter} />
    //   }}></RenderPrompComponent>

    //   <h2>Assignment3.2</h2>
    //   <RenderPropsComponent3 render={(count,incrementCounter)=>{
    //     return <ClickCounter2 count ={count} incrementCounter = {incrementCounter} />
    //   }}></RenderPropsComponent3>
    //   <RenderPropsComponent3 render={(count,incrementCounter)=>{
    //     return <HoverComponent2 count={count} incrementCounter={incrementCounter} /> 
    //   }}></RenderPropsComponent3>

      
    // <h1>Assignment4 ContextAPI's</h1>
    // <UserProvider value="Teja">
    //     <ComponentA />
    // </UserProvider>

    //   <h3>Assignmnet4.1</h3>
    //   <UserProvider2 value="Ervin">
    //     <ComponentA1 />
    //   </UserProvider2>
    // </div>
    <h2>React Redux</h2>
  );
}

export default App;
