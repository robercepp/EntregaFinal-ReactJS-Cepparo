import React, {useState, useEffect, useContext} from 'react';
import Item from './Item';
import {InventoryContext} from '../../context/InventoryContext'

const ItemList = ({categoria}) => {
const [productos, setProductos] = useState([]);
const{inventario} = useContext(InventoryContext)

useEffect(()=>{

const consultarBDD = async () => {

if (categoria !== undefined) {
const cardProducto = inventario.filter(producto => producto[1].categoria === categoria).map(filtrado =>
<div key={filtrado[0]} className='cart-container'>
    <Item item={filtrado} />
</div>
)
return cardProducto;
} else {
const cardProducto = inventario.map(producto =>
<div key={producto[0]} className='cart-container'>
    <Item item={producto} />
</div>
)
return cardProducto;
}
}
consultarBDD().then(producto =>setProductos(producto))
},[categoria, inventario])

return (
<>
    {productos}
</>
);
}

export default ItemList;