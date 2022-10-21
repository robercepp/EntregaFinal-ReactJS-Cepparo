import React, {useContext} from 'react';
import ItemCount from './ItemCount';
import { DarkModeContext } from '../../context/DarkModeContext';

const ItemDetail = ({item}) => {
    const {darkMode} = useContext(DarkModeContext);
return (
<div className='cart-container-detail'>
    <div className='image-container-detail'>
        <img className='image-producto-detail' src={item[1].imagen} alt="" />
    </div>
    <div className='cart-description-container-detail'>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Nombre: {item[1].nombre}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Tipo: {item[1].tipo}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Detalle: {item[1].detalle}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Precio: ${item[1].precio}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>stock: {item[1].stock} unidades</p>
    </div>
    <ItemCount producto={item} stock={item[1].stock} initial={1} />
</div>
);
}

export default ItemDetail;