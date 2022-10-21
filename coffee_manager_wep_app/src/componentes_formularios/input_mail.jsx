import React, { useState }from 'react';
import ComponenteInput from './Input';


export function Input_mail() {
    const [mail, setMail] = useState({ campo: '', valido: null });
    const expresiones = {mails: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
   
    return (
        <ComponenteInput
          estado={mail}
          cambiarEstado={setMail}
          tipo="email"
          label="Correo Electrónico"
          placeholder="john@correo.com"
          name="email"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.mails}
        />
    );

}