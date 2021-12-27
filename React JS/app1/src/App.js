import logo from './logo.svg';
import './App.css';
import PureComp from './Pure Components/PureComp';
import ComponentsContainer from './Pure Components/ComponentContainer';
import ParentComponent from './Reference Components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ComponentsContainer/>
    </div>
  );
}

export default App;
