import logo from './logo.svg';
import './App.css';
import { Userss } from './APIs/Class Component/FakeStore/Userss';
import { Cart } from './APIs/Functional Component/Fake store/Cart';
import { Products } from './APIs/Functional Component/Fake store/Products';

function App() {
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
