import React, {useState, useEffect, createContext} from 'react';
import { getProductos } from '../utils/firebase';


const InventoryContext = createContext();

const InventoryProvider = (props) => {

    const [inventario, setInventario] = useState([]);

    useEffect(()=>{
      
    getProductos().then(prod => {
        const items = prod.docs.map(producto => [producto.id, producto.data()])
        setInventario(items)
      })

    },[])



    return (
        <>
          <InventoryContext.Provider value={{inventario}}>

        {props.children}

          </InventoryContext.Provider>

        </>
    );
}

export {InventoryContext, InventoryProvider};
