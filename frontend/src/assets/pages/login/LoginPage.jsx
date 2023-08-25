import React, { useContext, useState } from "react";

import "../../styles/login.css";
import Logo from "../../images/logo_UNSM.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faLock, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import AuthContext from "../../contexts/AuthContext";

const LoginPage = () => {
  let { loginUser, setUsername, setPassword } = useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);

  return (
    <div>
      <header className="headerLogin">
        <div>
          <h1 className="unsm">UNSM</h1>
          <h1 className="rayita">|</h1>
          <h1 className="encEmo">TAMIZAJE SRQ - 18</h1>
        </div>
      </header>
      <main className="cajaLogin">
        <div className="logoLogin">
          <div className="cajaLogo">
            <a href="https://unsm.edu.pe/" target="_blank">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="cajaIniSes">
            <h1>Iniciar Sesión</h1>
          </div>
          <div className="cajaOlvCont">
            <h1>¿Olvidaste tu contraseña?</h1>
            <a href="#">Recuperar</a>
          </div>
        </div>
        <div className="inputsLogin">
          <form id="form" onSubmit={loginUser}>
            <div className="cajaInputs">
              <div>
                <i className="authentication">
                  <FontAwesomeIcon icon={faUser} className="logoInput" />
                </i>
                <input
                  id="usuario"
                  name="username"
                  type="text"
                  placeholder="Usuario"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <i className="authenticationPassword">
                  <FontAwesomeIcon icon={faLock} className="logoInput" />
                </i>
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="●●●●●●●●●●●●"
                  autoComplete="off"
                  className="inputPassword"
                  maxLength={30}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="viewPass" onClick={() => setShowPass(!showPass)}>
                  <FontAwesomeIcon
                    icon={showPass ? faEye : faEyeSlash}
                    className="logoEye"
                  />
                </i>
              </div>
            </div>
            <div className="btnLogin">
              <button id="buttonLogin" type="submit">
                Login
              </button>
            </div>
            <p className="warnings" id="warnings"></p>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="footerLogin">
        <div className="logoFooter">
          <img src={Logo} alt="logoFoot" />
          <div className="textosFooter">
            <h1 className="textoGris">Copyright © 2023 - Team Genesis</h1>
            <h1 className="textoUNSM">Universidad Nacional de San Martin</h1>
            <h1 className="textoGris">Tarapoto - Perú</h1>
          </div>
        </div>
        <div className="redesFooter">
          <h1>REDES:</h1>
          <a href="https://unsm.edu.pe/" target="_blank">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a href="https://www.facebook.com/unsmperu/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/unsmperu/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
