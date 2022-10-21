import React, { useState }from 'react';
import ComponenteInput from './Input';


export function Input_country() {
    const [country, cambiarCountry] = useState({ campo: '', valido: null });
    const expresiones = {country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/} 

    return (
        <ComponenteInput
          estado={country}
          cambiarEstado={cambiarCountry}
          tipo="text"
          label="country"
          placeholder="colombia"
          name="country"
          leyendaError="El country tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
          expresionRegular={expresiones.country}
        />  
    );
}