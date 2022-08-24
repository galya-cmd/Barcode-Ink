import './App.css';
import React from 'react';






function Footer() {
    return (
        <>
          
          <span className="footer">
            <address>
              <div className='footer-style'>
              <div className='footer-address'>
            <p> 115184, г.Москва, ул. Красная площадь,1!</p>
            <p>ИНН 2754949376</p>
            <p>ОГРН 153648459590000</p><br/>
            </div>
            <div className='footer-contacts'>
            <p>stsalykin@mail.ru</p>
            <p>88005555555</p>
            </div>

              </div>
       
            
           
            <hr className='hr'/>

        <nav >
          
          <ul className='nav-delivery'>
            <li>
            <a href="/delivery">Доставка и возврат</a>
            </li>
          </ul>

        </nav>
            </address>

          </span>
          
     
      
      


          
        </>
      

    );
  }
  
  export default Footer;