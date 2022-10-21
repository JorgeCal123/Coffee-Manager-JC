import Logo from "../../img/logo/1-logo-v8.png"
import { Formulario_login } from './formulario';
import './Home.css'

/**
 * Home - home page main view
 * returns images and a form login
 */

const Home = () => {
  return (
    <div className="inicio">
      <div className="margenes">
        <main className="mainLogo">
          <div className="containerimg">
              <img className="imglogo"src={Logo} alt="logoInicio"/>
          </div>
        </main>
        <aside className="formulario">
          <Formulario_login />
        </aside>
      </div>
    </div>
  );
}

export { Home };
