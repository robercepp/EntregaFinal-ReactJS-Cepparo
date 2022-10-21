import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import DinamicCategories from './DinamicCategories';
import { DarkModeContext } from '../../context/DarkModeContext';

const Categories = () => {
    const {darkMode} = useContext(DarkModeContext)
return (
<ul className='navbar-container'>
    <li>
        <Link to="/"><button className={darkMode? 'button-dark titles' :'button titles'}>Inicio</button></Link>
    </li>
    <DinamicCategories/>
</ul>
);
}

export default Categories;