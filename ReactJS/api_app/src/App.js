import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
import Albums from './Albums';

function App() {
  return (
    <div className="App">
      <Albums/> <br/>
     <Todos />
    </div>
  );
}

export default App;