import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Formulario = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
	align-items: flex-end;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Formulario1 = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
		width: 70%;
		heith
	}
	@media (max-width: 400px){
		grid-template-columns: 1fr;
		width: 30%;
		height: auto;
	}
	@media (max-width: 300px){
		grid-template-columns: 1fr;
		width: 10%;
		height: auto;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
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

const IconoValidacion = styled(FontAwesomeIcon)`
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

const ContenedorTerminos = styled.div`
	grid-column: span 2;
	input {
		margin-right: 10px;
	}
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const BotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 1;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	height: 60px;
	width: 60px;
	line-height: 20px;
	background: #FAA517;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	margin: 10px;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
	@media (max-width: 800px){
		height: 30px;
		width: 30px;
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 20px;
	background: #F66060;
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
	Formulario1,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	BotonCentrado,
	Boton,
	MensajeExito,
	MensajeError
};