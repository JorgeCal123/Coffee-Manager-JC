import React, { useState }from 'react';

import ComponenteInput from './Input';

export function Input_password() {
    const [password, setPassword] = useState({ campo: '', valido: null });
    const expresiones = {password: /^.{4,12}$/ }
    const value = password['campo'];

    return (
        <ComponenteInput
            estado={password}
            cambiarEstado={setPassword}
            tipo="password"
            label="Contraseña"
            placeholder="password"
            name="password"
            leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
            expresionRegular={expresiones.password}
        />

    );


}