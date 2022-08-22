import './App.css';
import React from 'react';

 import {BrowserRouter as  Route, Router, Routes} from 'react-router-dom';
 import Delivery from './Delivery';
import {Link} from 'react-router-dom';
import NavHref from './NavHref';



function Footer() {
    return (
        <>
          
          <span className="footer">
            <address>
            <p> 115184, г.Москва, ул. Красная площадь,1!</p>
            <p>ИНН 2754949376</p>
            <p>ОГРН 153648459590000</p><br/>
            <p>stsalykin@mail.ru</p>
            <p>88005555555</p>

            <hr className='hr'/>

            {/* <a id='delivery'>Информация о доставке и возврате</a> */}
            <NavHref/>
            {/* <Router>
        <Routes>
          <Route path='/delivery' element={<Delivery/>}/>
     

        </Routes>
      </Router> */}
          
     
            </address>
            
            
            

            
          </span>
          
     
      
      


          
        </>
      

    );
  }
  
  export default Footer;