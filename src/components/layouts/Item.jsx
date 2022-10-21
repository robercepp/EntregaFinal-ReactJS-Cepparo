import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';

const Item = ({item}) => {
    const {darkMode} = useContext(DarkModeContext);
return (
<>
    <div className='image-container'>
        <img className='image-producto' src={item[1].imagen} alt="" />
    </div>
    <div className='cart-description-container'>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Nombre: {item[1].nombre}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Tipo: {item[1].tipo}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Precio: ${item[1].precio}</p>
    </div>
    <Link to={`/item/${item[0]}`}> 
    <button className='card-button-detail'>ver detalles</button>
    </Link>
</>
);
}

export default Item;