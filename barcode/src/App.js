
import {BrowserRouter as  Router, Route , Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Ink from './Ink';
import Service from './Service';
import Home from './Home';
import Footer from './Footer';

import Guarantees from './Guarantees';
import Contacts from './Contacts';
import Delivery from './Delivery';





function App() {
  return (
    <div className="App-header">
      <div className='top'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/ink' element={<Ink/>}/>
          <Route path='/guarantees' element={<Guarantees/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path="/delivery" element={<Delivery />} />
          

        </Routes>
      </Router>

      </div>

    <div>
    <Footer/>

    </div>
    
    </div>
  );
}

export default App;
