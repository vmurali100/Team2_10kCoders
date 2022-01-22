import logo from './logo.svg';
import './App.css';
import { Header } from './10K_CODERS/Header';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Home } from './10K_CODERS/Home';
import { About } from './10K_CODERS/About';
import { Contact } from './10K_CODERS/Contact';
import { Dashboard } from './10K_CODERS/Dashboard';
import { Members } from './10K_CODERS/Members';
import { MembersDetails } from './10K_CODERS/Membersdetails';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="" element= {<Home />} />
      <Route path="about" element= {<About />} />
      <Route path="contact" element= {<Contact />} />
      <Route path="Dashboard" element= {<Dashboard />} />
      <Route path="Members" element= {<Members />} />
      <Route path="Members/:student" element= {<MembersDetails />}  />
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
