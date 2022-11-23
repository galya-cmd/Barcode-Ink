
import './App.css';
import img from '../src/images/logo.png';
import { Link } from 'react-router-dom';

function Nav (){
return(
    <>
    <div className='hamburger-menu'>

    <input id="menu__toggle" type="checkbox" />
  <label className="menu__btn" for="menu__toggle">
    <span></span>
  </label>    

    <ul className="nav menu__box">
    <li><a href="/" className='menu__item menu__logo' >PRIZMA
    </a></li>
    <li>
    </li>
    
    
<li><NavLink to="/" className='menu__item' >Главная</NavLink></li>
<li><NavLink to="/ink" className='menu__item'>Чернила</NavLink></li>
<li><NavLink to="/service" className='menu__item'>Сервис</NavLink></li>
<li><NavLink to="/guarantees"className='menu__item'>Гарантии</NavLink></li>
<li><NavLink to="/contacts" className='menu__item'>Контакты</NavLink></li>
</ul>
</div>
    </>
)
}

export default Nav