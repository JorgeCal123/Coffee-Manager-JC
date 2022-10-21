import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from '../elementos_formulario/Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { add_info, get_info} from './data_formulario1';

/**
 * Metodos de clicks y eventos
 * on change nos permite ejecutar una funcion
 * onkeyup cuando presiones hacia dentro y levantas el dedo es cuando se ejecuta otra funcion
 * onblur es cuando se da click fuera del input se ejecuta una funcion
 */
const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
	const onChange = (e) => {
		cambiarEstado({...estado, campo: e.target.value});
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				cambiarEstado({...estado, valido: 'true'});
				add_info(name, estado.campo);
			} else {
				cambiarEstado({...estado, valido: 'false'});
			}
		}

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
			<GrupoInput>
				<Label htmlFor={name} valido={estado.valido}>{label}</Label>
			
				<Input 
					type={tipo}
					placeholder={placeholder} 
					id={name}
					value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				/>
				<IconoValidacion 
					icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
					valido={estado.valido}
				/>
			</GrupoInput>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div>
	);
}
 
export default ComponenteInput;
