import React, {useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { DarkModeContext } from '../../context/DarkModeContext';
import { crearOrdenCompra, getProducto, updateProducto } from '../../utils/firebase';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const CheckOut = () => {
const {carrito, precioTotal, clearCart} = useContext(CartContext);
const {darkMode} = useContext(DarkModeContext);
const navigate = useNavigate();

const crearCarrito = () => {
const constructorCarrito = carrito.map(producto =>
<div className='ticket-item' key={producto.id}>
    <span className='separator' />
    <p className={darkMode? 'ticket-dark' : 'ticket' }>Nombre: {producto.nombre}</p>
    <p className={darkMode? 'ticket-dark' : 'ticket' }>Tipo : {producto.tipo}</p>
    <p className={darkMode? 'ticket-dark' : 'ticket' }>precio unitario: ${producto.precio}</p>
    <p className={darkMode? 'ticket-dark' : 'ticket' }>cantidad: {producto.cantidad}</p>
    <p className={darkMode? 'ticket-dark' : 'ticket' }>subtotal: ${producto.precio*producto.cantidad}</p>
</div>
)
const app = (carrito.length > 0) ? constructorCarrito :
<div className='main-container'>
    <p>no hay items para confirmar compra</p>
</div>
return app
}
crearCarrito()

const datosFormulario = React.useRef()

const confirmarCompra = (e) => {
e.preventDefault()
let now = new Date();
const listaproductos = carrito.map((producto) => "-" + producto.cantidad + "x " + producto.nombre);
const datForm = new FormData (datosFormulario.current)
const envioFormulario = Object.fromEntries(datForm)
if(envioFormulario.name === "") {
toast.error("por favor, ingrese su nombre", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
} else if (envioFormulario.lastname === "") {
toast.error("por favor, ingrese su apellido", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
} else if (envioFormulario.dni === "") {
toast.error("por favor, ingrese su dni", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
} else if (envioFormulario.telefono === "") {
toast.error("por favor, ingrese su n° de telefono", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
} else if (envioFormulario.email1 === "") {
toast.error("por favor, ingrese su e.mail", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
} else if (envioFormulario.email1 !== envioFormulario.email2) {
toast.error("atención: los emails no coinciden", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
} else if (envioFormulario.direccion === "") {
toast.error("por favor, ingrese su dirección", {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
} else {
const listar = carrito.map((producto) =>
getProducto(producto.id,).then(inv =>{
Swal.fire({
title: 'Confirma pedido?',
text: "Al aceptar, se generará el pedido",
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Aceptar',
cancelButtonText: "cancelar"
}).then((result) =>{
if (result.isConfirmed) {
var prod = inv.data();
prod.stock -= producto.cantidad
updateProducto(producto.id, prod);
crearOrdenCompra(envioFormulario.name, envioFormulario.lastname, envioFormulario.dni, envioFormulario.telefono,
envioFormulario.email2, envioFormulario.direccion, now.toLocaleDateString(), now.toLocaleTimeString(), listaproductos,
precioTotal()).then(orden =>{
Swal.fire({
icon: 'success',
title: '<strong>operación completada</strong>',
html: 'su numero de orden es: '+orden.id,
allowOutsideClick: false,
allowEscapeKey: false,
confirmButtonText: "Aceptar"
}).then ((result) =>{
if (result.isConfirmed) {
clearCart()
navigate('/')
}
});
});
}
})
}
)
)
}
}

return (
<div className='main-container'>
    <div className='ticketlist'>
        <p><strong className={darkMode? 'ticket-dark' : 'ticket' }>los productos a encargar son:</strong></p>
        {crearCarrito()}
        <p className={darkMode? 'ticket-dark' : 'ticket' }>Total: ${precioTotal()}</p>
    </div>
    <div className='ticketlist'>
        <form className='email-form' onSubmit={confirmarCompra} ref={datosFormulario}>
            <p className={darkMode? 'message-dark' :'message'}>A continuación, llene el formulario y presione el botón
                "Confirmar" para finalizar la compra.</p>
            <br />
            <input className='input' type="text" name='name' placeholder="Nombre" />
            <br />
            <input className='input' type="text" name='lastname' placeholder="Apellido" />
            <br />
            <input className='input' type="number" name='dni' placeholder="D.N.I" />
            <br />
            <input className='input' type="number" name='telefono' placeholder="n° telefono (solo números)" />
            <br />
            <input className='input' type="email" name='email1' placeholder="e-mail" />
            <br />
            <input className='input' type="email" name='email2' placeholder="repita su e-mail" />
            <br />
            <input className='input' type="text" name='direccion' placeholder="direccion" />
            <br />
            <div className='form-buttons-container'>
                <button className={darkMode? 'button-dark titles' :'button titles'} type='submit'>Confirmar</button>
                <button className={darkMode? 'button-dark titles' :'button titles'} type='reset'>borrar</button>
            </div>
        </form>
    </div>
</div>
);

}

export default CheckOut;