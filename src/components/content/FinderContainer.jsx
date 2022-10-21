import React from 'react';
import { useParams } from 'react-router-dom';
import FinderDetail from '../layouts/FinderDetail';

const FinderContainer = () => {
    const {query} = useParams();
    return (
        <div className='main-container'>
            <FinderDetail buscar={query}/>
        </div>
    );
}

export default FinderContainer;
