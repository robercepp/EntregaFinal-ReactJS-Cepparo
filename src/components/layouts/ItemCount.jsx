import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {DarkModeContext} from '../../context/DarkModeContext';

function ItemCount({producto, stock, initial}) {
const [cantidad, setCantidad] = useState(initial);
const {agregarProducto} = useContext(CartContext);
const {darkMode} = useContext(DarkModeContext);
const sumar = () => {
setCantidad(cantidad+1)
}
const restar = () => {
setCantidad(cantidad-1)
}

return (
<div className='cart-form' action="">
    <button disabled={cantidad <=1} className={darkMode? 'button-cantidad-dark': 'button-cantidad'} onClick={restar}>-</button>
    <p className={darkMode? 'ind-cant-dark':'ind-cant'}>{cantidad}</p>
    <button disabled={cantidad>= stock} className={darkMode? 'button-cantidad-dark': 'button-cantidad'} onClick={sumar}>+</button>
    <button disabled={stock <=0} className='card-button' type='button' onClick={()=> agregarProducto(producto, cantidad)}>"Agregar al carrito"</button>
</div>
)
}

export default ItemCount;