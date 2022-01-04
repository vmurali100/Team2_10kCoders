import logo from './logo.svg';
import './App.css';
import RandomImg from './HigherOrderComponent/RandomImg';
import { Child } from './Context/Child';
import { Parent1 } from './Context/Parent1';
import PureComp from './HigherOrderComponent/PureComp';
import { useState } from 'react';
import { UserProvider } from './Context/Context';
import RefComp from './UseREF/RefComp';
import Consume from './Consuming';
import Sample from './PureComp/sampe1';
import Parent from './PureComp/parent';
import Student from './Redux/Student';

function App() {
//  const[zip ,setZip] = useState(5060000001)
  return (
    <div className="App">
     {/* <RandomImg /> */}
     {/* <Child /> */}
     {/* <Parent1 /> */}
     {/* <PureComp /> */}
     {/* <RefComp /> */}
     {/* <Consume/> */}
     {/* <Sample /> */}
     {/* <Parent /> */}

     {/* <UserProvider value={zip}>
 <h3>Hello From parent 1 Comp</h3>
     <Child />
 </UserProvider> */}
 <Student />
    </div>
  );
}

export default App;
