import React, {useContext, useState} from 'react';
import Categories from '../layouts/Categories';
import SearchBar from '../layouts/SearchBar';
import {Link} from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';

/*CartWidget.jsx se encuentra dentro de SearchBar.jsx por razones de organización y prolijidad*/

const Navbar = () => {
    const {darkMode, toggleDarkMode } = useContext(DarkModeContext)
    const [minicon, setMinicon] = useState("https://firebasestorage.googleapis.com/v0/b/react-34755-2022-fecd4.appspot.com/o/resources%2Ficons%2Fmoonicon.png?alt=media&token=4cd7e56a-8534-43ac-a75d-eb041f9fae47");
    const cambiarEstado = () => {
        toggleDarkMode()
        toggleMinicon()
    }

    const toggleMinicon = () => {
        if (minicon ==="https://firebasestorage.googleapis.com/v0/b/react-34755-2022-fecd4.appspot.com/o/resources%2Ficons%2Fmoonicon.png?alt=media&token=4cd7e56a-8534-43ac-a75d-eb041f9fae47") {
            setMinicon ("https://firebasestorage.googleapis.com/v0/b/react-34755-2022-fecd4.appspot.com/o/resources%2Ficons%2Fsunicon.png?alt=media&token=09198417-fdcc-4834-97c7-00bf0952c9e7")
        } else {
            setMinicon ("https://firebasestorage.googleapis.com/v0/b/react-34755-2022-fecd4.appspot.com/o/resources%2Ficons%2Fmoonicon.png?alt=media&token=4cd7e56a-8534-43ac-a75d-eb041f9fae47") 
        }
    }

return (
<>
    <nav className={darkMode? 'darkmode navbar' :'navbar'}>
        <Link to={"/"}> <div className='logo-container'>
        <p className={darkMode? 'navbar-logo-dark titles' :'navbar-logo titles'}>Anabella Avena</p>
        <p className={darkMode? 'subtitle-dark titles' :'subtitle titles'}>ilustradora freelance</p>
        </div>
        </Link>
        <Categories />
        <div className='utils-container'>
        <SearchBar busqueda="Buscar Productos" />
        <button className='button' onClick={() => cambiarEstado()}><img name="minicon" className='minicon' src={minicon} alt="icono sol"/></button>
        </div>
    </nav>
</>
);
}

export default Navbar;