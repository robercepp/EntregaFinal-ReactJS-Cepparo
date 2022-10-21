import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../layouts/ItemList'

const ItemListContainer = () => {

const {categoryId} = useParams();

return (
<div className='main-container'>
    <ItemList categoria={categoryId} />
</div>
);
}

export default ItemListContainer;