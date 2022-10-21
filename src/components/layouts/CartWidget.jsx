import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {darkMode} = useContext(DarkModeContext);
    const {productosTotales} =useContext(CartContext);
return (
<>
    <Link to={"/cart"}> 
        <p className={darkMode? 'shop-cart-dark':'shop-cart' }>H</p>
        <p className={productosTotales() === 0? 'hidden' : 'cart-widget-quantity'}>{productosTotales()}</p>
    </Link>
</>
);
}

export default CartWidget;