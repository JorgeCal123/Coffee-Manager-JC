import { faTemperatureEmpty } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const info = {};

export function add_info(key2, value) {
    info[key2] = value;
}

export function get_info() {
    return (info)
}

export function Validation_data() {
    let valor = false;
    let valor2 = true;

    Axios.get("http://127.0.0.1:8000/user/")
      .then((respuesta) => {
          respuesta.data.map( (item) => {
            
            if ((item.email === info.email) && (item.password === info.password)){
                return(valor)
            }
          })
      })
      .catch(() => {
      })


      return(valor)

}