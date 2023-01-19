
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
    <li><Link to="/" className='menu__item menu__logo' >PRIZMA
    </Link></li>
    <li>
    </li>
    
    
<li><Link to="/" className='menu__item' >Главная</Link></li>
<li><Link to="/ink" className='menu__item'>Чернила</Link></li>
<li><Link to="/service" className='menu__item'>Сервис</Link></li>
<li><Link to="/guarantees"className='menu__item'>Гарантии</Link></li>
<li><Link to="/contacts" className='menu__item'>Контакты</Link></li>
</ul>
</div>
    </>
)
}

export default Nav