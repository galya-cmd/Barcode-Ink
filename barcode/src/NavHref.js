import React from 'react';
import {BrowserRouter as Route, Router, Routes, NavLink} from 'react-router-dom'
import Delivery from './Delivery';


function NavHref(){
    return(
        <>
<Router>
    <nav>
        <li><NavLink to='/delivery'>Доставка</NavLink></li>
    </nav>
    <Routes>
    <Route path='/delivery' element={<Delivery/>}></Route>
    </Routes>
</Router>
        </>
    )
}
export default NavHref;