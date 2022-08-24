import './App.css';
import img from '../src/images/prism-3.svg';

function Nav (){
return(
    <>
    <ul className="nav">
    <li><a href="/"><img src={img} alt='logo'></img></a></li>
<li><a href="/">Главная</a></li>

<li><a href="/ink">Чернила</a></li>
<li><a href="/service">Сервис</a></li>
<li><a href="/guarantees">Гарантии</a></li>

<li><a href="/contacts">Контакты</a></li>
</ul>
    </>
)
}

export default Nav