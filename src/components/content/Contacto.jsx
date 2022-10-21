import React, {useContext} from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import Swal from 'sweetalert2';

const Contacto = () => {
const {darkMode} = useContext(DarkModeContext);

const datosFormulario = React.useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        const datForm = new FormData (datosFormulario.current)
        const envioFormulario = Object.fromEntries(datForm)
        Swal.fire({
            icon: 'success',
            title: '<strong>Exito!</strong>',
            html:  envioFormulario.name+', tu mensaje ha sido enviado, en breve nos pondremos en contacto contigo.',
            confirmButtonText: "aceptar"
            })
    }

return (
<div className='contact-container'>
<form className='email-form' onSubmit={consultarForm} ref={datosFormulario}>
        <p className={darkMode? 'message-dark':'message'}>A continuación, llene el formulario y envíe su mensaje, en breve nos pondremos en contacto</p>
        <br />
        <input className='input' type="text" name='name' placeholder="Nombre" />
        <br />
        <input className='input' type="text" name='lastname' placeholder="Apellido" />
        <br />
        <input className='input' type="email" name='email' placeholder="e-mail" />
        <br />
        <textarea name="message" cols="30" rows="10" placeholder='Ingrese su mensaje aquí'></textarea>
        <br />
        <div className='form-buttons-container'>
        <button className={darkMode? 'button-dark titles':'button titles'} type='submit'>Enviar</button>
        <button className={darkMode? 'button-dark titles':'button titles'} type='reset'>borrar</button>
        </div>
    </form>
</div>
);
}

export default Contacto;