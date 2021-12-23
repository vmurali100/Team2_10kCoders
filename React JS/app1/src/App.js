import logo from './logo.svg';
import './App.css';
import { Userss } from './APIs/Class Component/FakeStore/Userss';
import { Cart } from './APIs/Functional Component/Fake store/Cart';
import { Products } from './APIs/Functional Component/Fake store/Products';
import { Name } from './APIs/Functional Component/Fill Text/Name';
import { Users } from './APIs/Functional Component/Json/Users';
import { Albums } from './APIs/Functional Component/Json/Albums';
import { Comments } from './APIs/Functional Component/Json/Comments';
import { Photos } from './APIs/Functional Component/Json/Photos';
import { Posts } from './APIs/Functional Component/Json/Posts';
import { Todos } from './APIs/Functional Component/Json/Todos';

function App() {
  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;
