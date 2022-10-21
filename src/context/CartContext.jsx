import React, {useState, createContext} from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext()

const CartProvider = (props) => {
const [carrito, setCarrito] = useState([]);

const agregarProducto = (prod, cant) => {

const aux = carrito
let indice = aux.findIndex(producto => producto.id === prod[0])
if (indice !== -1) {
aux[indice].cantidad = cant
} else {
const id = prod[0]
const x = prod[1]
const prodCarrito = {id, ...x, cantidad: cant}
aux.push(prodCarrito)
} setCarrito(structuredClone(aux))
if (cant > 1) {
toast.success(cant+" items han sido agregados al carrito", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
} else {
toast.success(cant+" item han sido agregado al carrito", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
}

}

const quitarProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id))

const clearCart = () => setCarrito([])

const productosTotales =() => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

const precioTotal = () =>{
    const mapeo = carrito.map(producto => producto)
    const resultado = mapeo.reduce((prev, act) => prev + (act = act.cantidad*act.precio), 0)
    return resultado
    }

return (
<>
    <CartContext.Provider value={{
     
    agregarProducto,
    quitarProducto,
    clearCart,
    productosTotales,
    precioTotal,
    carrito }}>
        {props.children}
    </CartContext.Provider>

</>
);
}

export {CartContext, CartProvider};