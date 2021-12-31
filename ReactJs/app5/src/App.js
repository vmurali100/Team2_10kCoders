import logo from './logo.svg';
import './App.css';
import ClickCounter1 from './Assignment Of HOC Components/ClickCounter1';
import HoverCounter from './Assignment Of HOC Components/HOC with PureComponents/HoverCounter';
import ParentComponent from './Assignment Of HOC Components/ParentComponent';
import ClickCounter from './Assignment Of HOC Components/HOC with PureComponents/ClickCounter';
import ParentComponent2 from './Assignment Of HOC Components/HOC with PureComponents/ParentComponent2';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <ParentComponent2 />
    </div>
  );
}

export default App;
