import React, {useContext} from 'react';
import CartWidget from './CartWidget';
import {useNavigate} from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';

const SearchBar = () => {
const navBusqueda = useNavigate();
const {darkMode} =useContext(DarkModeContext);

const datosBusqueda = React.useRef()

const buscar = (e) => {
e.preventDefault()
const datBusqueda = new FormData(datosBusqueda.current)
const envioBusqueda = Object.fromEntries(datBusqueda)
const query = envioBusqueda.buscar
navBusqueda(`./search/${query}`)
}

return (
<>
    <form className='search-bar-container' onSubmit={buscar} ref={datosBusqueda}>
        <CartWidget />
        <input className='search' name='buscar' type="text" placeholder={"busqueda"} />
        <button className={darkMode? 'button-dark titles' :'button titles'} type='submit'>buscar</button>
    </form>
</>
);
}

export default SearchBar;