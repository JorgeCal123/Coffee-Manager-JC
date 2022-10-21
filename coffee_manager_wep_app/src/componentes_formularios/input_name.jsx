import React, { useState }from 'react';
import ComponenteInput from './Input';


export function Input_name() {
    const [name, cambiarName] = useState({ campo: '', valido: null });
    const expresiones = {name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/}
   
    return (
        <ComponenteInput
          estado={name}
          cambiarEstado={cambiarName}
          tipo="text"
          label="Nombre"
          placeholder="John Doe"
          name="name"
          leyendaError="El name solo puede contener letras y espacios."
          expresionRegular={expresiones.name}
        />
    );

}