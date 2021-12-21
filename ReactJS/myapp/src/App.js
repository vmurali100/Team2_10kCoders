import logo from './logo.svg';
import './App.css';
import Akhil, { Legend } from './Akhil';
import Akhil2 from './Akhil2';
import Myajay ,{  Myname ,Myakhil} from './Myname';
import Myclass, { Myclass3 } from './Myclass';


function App() {
  return (
    <div className="App">
     <Akhil/>
     <Akhil2/>
     <Myajay/>
     <Myakhil/>
     <Myname/>
     <Myclass3/>
     <Myclass/>
     <Legend/>
    
    </div>
  );
}

export default App;

