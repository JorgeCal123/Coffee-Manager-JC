import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/** 
 * objeto que contiene los colores que voy a usar para mi aplicacion
 * 
 */
const colores = {
	borde: "#0075FF",
	error: "#F66060",
	exito: "#1ed12d",
	boton: "#4682b4",
	textboton: "#fff"

}

const Formulario = styled.form`
	display: grid;
	grid-template-columns: 2fr;
	gap: 20px;
`;

const Formulario2 = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	left: 20%;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;
/** 
 * grupo para encerrar el input y el icono x 
 */
const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
	padding-left: 20%;


`;

/** estilos de un label:
 * ancho = 100%
 * background = fondo de color blanco
 * border-radius = bordes un poco redondeados
 * height: altura de 45 pixeles
 * line-height: Altura de linea para que el texto quede centrado
 * padding: margenes
 * transition: para que tenga una transicion de .3 segundos;
 * border: color solido pero transparente para que el tamaño del input no cambie;
 *
 * & =  quiere decir que queremos acceder al mismo Input
 *  focus = es un estado
 * border = cambiar el color del borde a azul
 * outline = quita el subrayado cuando le da click
 * box-shadow = agrega una sombra 
*/
const Input = styled.input`
	width: 70%; 
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const Input2 = styled.input`
	width: 100%; 
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;
/**
 * mensaje que muestra en el momento que haya un error o no se escriba nada
 * font-size: tamaño de la letra
 * margin-bottom: 
 * color: coloca un color rojo
 * display: None para que no se muestre por defecto;
*/

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;

	${props => props.valido === 'true' && css`
		display: none;
	
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

/** agrego un componente al que queremos darle un estilo en este caso es al icono X
 * position
 * right = que el icono se coloque a la derecha
 * bottom = de abajo hacia arriba desplazamos 14px
 * z-index  = que quede por arriba del input
 * fontsiza = controlamos el tamaño del icono
 * opacity = es cero para que no se muestre 
*/

const IconoValidacion = styled(FontAwesomeIcon)`
	padding-right: 25%;
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
	
	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;


/** Modifica el estilo para la parte de terminos y condiciones
 *  el input que tenga dentro del div tenga:
 * grid-column = se expande a 2 columnas en vez de una sola
 * margin-right = para que el checkbox y el tecto tenga una margen
 */
const ContenedorTerminos = styled.div`
	grid-column: span 1;

	input {
		margin-right: 10px;
	}

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

/** contenedor para modificar los estilos de los botones
 * display se utiliza flex para centrar el boton con los sigtes estilos:
 * justify-direction: colum; al usar flexbox si ha y un texto se pone a la derecha del boton y no queremos eso
 * align-items: centra los items
 * grid-column que tenga 2 columnas
 */

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 1;
	justify-content: center;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;
/* Modificar los estilos del boton
 * height: altura de 45 px
 * width:  ancho de ...
 * line-height: Altura de linea para que el texto quede centrado
 * background: color del boton;
 * color: color del texto del boton;
 * font-weight: Ancho de fuente de forma negritas
 * border:  quitarle el border
 * border-radius: redondear los bordes del boton
 * cursor: cambiarle a la manito cuando esten cerca del boton
 * transition: funcion de tiempo para que si se modifica una de las anteriores propiedades tenga 
 * una transicion  y se vea el efecto de hacer click
 * 
 * &.hover = cuando se aceerque a este boton pase lo siguiente
 * bos shadox = se le coloque una sombra
 * 
 */
const Boton = styled.button`
	height: ${props => props.small ? 40 : 50}px;
	width: ${props => props.small ? 90 : 100}px;
	line-height: 45px;
	background: ${colores.boton};
	color: ${colores.textboton};
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	font-size: 20px;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

/**
 * mensaje de exito para cuando se envien los datos
 * tamaño de letra 14
 * color verde
 * 
 */

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
`;


/**
 * mensaje de error para cuando se envien los datos
 * tamaño del div de 45
 * line height lo centra
 * background de color rojo
 * padding margenes
 * grid colum abarque 2 columnas
 * margin de 0 para que no se desfase el elemento
 * marigin left para darle espacio entre el texto y el icono
 */
const MensajeError = styled.div`
	height: 45px;
	line-height: 20px;
	background: color: ${colores.error};
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
	@media (max-width: 800px){
		grid-column: span 1;
		height: 100px;
	}
`;

export {
	Formulario,
	Formulario2,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError
};
