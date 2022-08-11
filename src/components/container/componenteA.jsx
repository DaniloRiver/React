import React from 'react';
import { Contact } from '../models/contacto.class';
import ComponenteB from '../pure/componenteB';


const ComponenteA = () => {

    const contactDefault= new Contact('John','smith','mohr1986@gmail.com',true);


    return (
        <div>
            <div><h1>Your Contact</h1></div>
            <div>
                <ComponenteB contacto={contactDefault}/>
            </div>
        </div>
    );
};


export default ComponenteA;
