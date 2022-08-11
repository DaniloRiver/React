import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contacto.class';


const ComponenteB = ({contacto}) => {
    

    return (
        <div>
        
            <h2>Nombre: { contacto.name }</h2>
            <h3>Apellido: { contacto.last_name }</h3>
            <h4>Email:{ contacto.email }</h4>
            <h5>he is conected:{ contacto.conectado?' Contacto En Línea' :' Contacto No Disponible'} </h5>  
        </div>
    );
};


ComponenteB.propTypes = {
   contacto: PropTypes.instanceOf(Contact)
};


export default ComponenteB;
