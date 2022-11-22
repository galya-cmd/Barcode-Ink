
import './App.css';
import img from '../src/images/logo.png';

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
<li><a href="/" className='menu__item'>Главная</a></li>
<li><a href="/ink" className='menu__item'>Чернила</a></li>
<li><a href="/service" className='menu__item'>Сервис</a></li>
<li><a href="/guarantees"className='menu__item'>Гарантии</a></li>
<li><a href="/contacts" className='menu__item'>Контакты</a></li>
</ul>
</div>
    </>
)
}

export default Nav