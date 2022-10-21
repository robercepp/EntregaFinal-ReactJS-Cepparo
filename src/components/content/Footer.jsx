import React, {memo, useContext} from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';

const Footer = () => {
   const{darkMode} = useContext(DarkModeContext);
return (
<div className={darkMode? 'footer-container-dark':'footer-container'}>
   <Link className={darkMode? 'small-links-dark':'small-links'} to={"/contacto"}>contacto</Link>
</div>
);
}

export default memo (Footer);