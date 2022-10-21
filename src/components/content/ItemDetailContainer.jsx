import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../layouts/ItemDetail'
import { getProducto } from '../../utils/firebase';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
const [producto, setProducto] = useState([]);
const {id} = useParams();
const {darkMode} = DarkModeContext;

useEffect(()=>{

getProducto(id).then(prod => {
setProducto([prod.id, prod.data()])
})

},[id])

if (producto[1] !== undefined ) {
return (
<div className='main-container-producto'>
    <ItemDetail item={producto} />
</div>
)
} else {
return(
<div className='main-container-producto'>
    <h1 className={darkMode?'big-message-dark':'big-message'}>No existe un elemento con esa Id</h1>
    <Link to="/"><button className='card-button'>Volver al inicio</button></Link>
</div>
)

}
}

export default ItemDetailContainer;