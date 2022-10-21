import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import CartCard from '../layouts/CartCard';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Link } from 'react-router-dom';

const Cart = () => {
const {carrito, clearCart, precioTotal, productosTotales} = useContext(CartContext);
const [productos, setProductos] = useState([]);
const {darkMode} = useContext(DarkModeContext);

useEffect (()=>{
const crearCarrito = async () => {
    const constructorCarrito = carrito.map(producto =>
        <div key={producto.id} className='cart-container'>
            <CartCard producto={producto}/>
        </div>
        )
     const app = (carrito.length > 0) ? constructorCarrito : 
     <div className='no-items-container'>
     <h1 className={darkMode?'big-message-dark':'big-message'}>No hay elementos cargados en el carrito</h1>
     <Link to="/"><button className='card-button'>Volver al inicio</button></Link>
     </div>
        return app
}

crearCarrito().then(producto => setProductos (producto))
},[carrito, darkMode])

return (
<div className='main-cart-container'>
    <div className='cart-item-container'>
        {productos}
    </div>
    <button className={carrito.length===0? 'hidden' : 'card-button'} onClick={()=>clearCart()}>Borrar Carrito</button>
    <div className='main-cart-container'>
    <p className={carrito.length === 0? 'hidden' : darkMode? 'button-dark titles':'button titles'}>Cantidad de items total: {productosTotales()}</p>
    <p className={carrito.length === 0? 'hidden' : darkMode? 'button-dark titles':'button titles'}>Total ${precioTotal()}-</p>
    </div>
    <div>
    <Link to={`checkout/`}><button className={carrito.length===0? 'hidden' : 'card-button'}>Checkout</button></Link>
    </div>
</div>
);
}

export default Cart;