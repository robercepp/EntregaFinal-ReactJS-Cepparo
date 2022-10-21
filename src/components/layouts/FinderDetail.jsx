import React, {useState, useEffect, useContext} from 'react';
import Item from './Item';
import Swal from 'sweetalert2';
import {InventoryContext} from '../../context/InventoryContext'

const FinderDetail = ({buscar}) => {
const{inventario} = useContext(InventoryContext)
const [productos, setProductos] = useState([]);

useEffect(() => {

const consultarBDD = async () => {

if(!buscar) {
Swal.fire({
icon: 'error',
title: 'lo sentimos.',
text: 'no has escrito nada en el casillero de busqueda',
confirmButtonText: "entendido"
});
const respDefault = inventario.map(producto =>
<div key={producto[0]} className='cart-container'>
    <Item item={producto} />
</div>
)
return respDefault
} else {
const resultadoBusqueda = inventario.filter(producto => producto[1].tipo.toLowerCase().includes(buscar.toLowerCase()) ||
producto[1].nombre.toLowerCase().includes(buscar.toLowerCase()) ||
producto[1].categoria.toLowerCase().includes(buscar.toLowerCase()) ||
producto[1].detalle.toLowerCase().includes(buscar.toLowerCase()) ||
producto[1].tags.toLowerCase().includes(buscar.toLowerCase())).map(encontrado =>
<div key={encontrado[0]} className='cart-container'>
    <Item item={encontrado} />
</div>
);

if (resultadoBusqueda.length === 0) {
Swal.fire({
icon: 'error',
title: 'lo sentimos.',
text: '"'+buscar+'" no se ha encontrado.',
confirmButtonText: "entendido"
});
const respDefault = inventario.map(producto =>
<div key={producto.id} className='cart-container'>
    <Item item={producto} />
</div>
)
return respDefault
} else {
return resultadoBusqueda;
}
}
}

consultarBDD().then(producto => setProductos(producto))
},[buscar, inventario])

return (
<>
    {productos}
</>
);
}

export default FinderDetail;