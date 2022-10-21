import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { DarkModeContext } from '../../context/DarkModeContext';

const CartCard = ({producto}) => {
const {quitarProducto} = useContext(CartContext);
const {darkMode} = useContext(DarkModeContext);
return (
<>
    <div className='image-container'>
        <img className='image-producto' src={producto.imagen} alt="" />
    </div>
    <div className='cart-description-container'>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Nombre: {producto.nombre}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Tipo: {producto.tipo}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Precio unitario: ${producto.precio}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Cantidad solicitada: x{producto.cantidad}</p>
        <p className={darkMode? 'titulo-producto-dark':'titulo-producto'}>Subtotal: ${producto.cantidad*producto.precio}</p>
    </div>
    <button className='card-button' onClick={()=>quitarProducto(producto.id)}>quitar</button>
</>
);
}

export default CartCard;