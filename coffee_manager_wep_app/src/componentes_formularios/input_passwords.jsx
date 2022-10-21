import React, { useState }from 'react';
import ComponenteInput from './Input';

const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: 'false' }
        });
      } else {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: 'true' }
        });
      }
    }
  }


export function Input_passwords() {
    const [password2, cambiarPassword2] = useState({ campo: '', valido: null });    const expresiones = {mails: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
    return (
    <ComponenteInput
        estado={password2}
        cambiarEstado={cambiarPassword2}
        tipo="password"
        label="password2"
        name="password2"
        funcion={validarPassword2}
        leyendaError="el password debe ser igual."
        expresionRegular={expresiones.password2}
        />       

    );
}