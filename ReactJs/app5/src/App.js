
import './App.css';

import ParentComponent from './Assignment Of HOC Components/ParentComponent';

import ParentComponent2 from './Assignment Of HOC Components/HOC with PureComponents/ParentComponent2';
import ParentComponent3 from './Assignment Of HOC Components/HOC with PureCpmnt2/ParentComponent3';
import Reference1 from './Assignment on References/Reference1';
import Reference2 from './Assignment on References/Reference2';
import Reference3 from './Assignment on References/Reference3';
import Reference4 from './Assignment on References/Reference4';
function App() {
  return (
    <div className="App">
      <ParentComponent />
      <ParentComponent2 />
      <ParentComponent3 />
      <Reference1 />
      <Reference2 />
      <Reference3 />
      <Reference4 />
    </div>
  );
}

export default App;
