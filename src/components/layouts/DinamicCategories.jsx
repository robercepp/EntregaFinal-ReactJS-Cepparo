import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {InventoryContext} from '../../context/InventoryContext';
import { DarkModeContext } from '../../context/DarkModeContext';
const DinamicCategories = () => {
    const[categorias, setCategorias] = useState([]);
    const{inventario} = useContext(InventoryContext);
    const {darkMode} = useContext(DarkModeContext);

    useEffect(()=>{
        const consultarBDD = async () => {

            const listaCategorias = [...new Set(inventario.map(cat => cat[1].categoria))] 
            const categoriaBuilder = listaCategorias.map((item, i) => 
              <li key={i}>
                <Link to={`categories/${item}`}><button className={darkMode? 'button-dark titles' :'button titles'}>{item.charAt(0).toUpperCase()+item.slice(1)}</button></Link>
              </li>
            ) 
            return categoriaBuilder
        }
        consultarBDD().then(categorias => setCategorias(categorias))
    },[categorias, inventario])
    return (
        <>
{categorias}
        </>
    );
}

export default DinamicCategories;
