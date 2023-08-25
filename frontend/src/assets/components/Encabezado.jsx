import * as React from "react";
import "../styles/Encabezado.css";
import logo_UNSM from '../images/logo_UNSM.png'
import logo_GobiernoRegional from '../images/logo_GobiernoRegional.png'

function Header() {
  return (
    <div className="encabezado d-flex align-items-center p-3 my-3 text-white rounded shadow-sm">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="logoHeaderUnsm"><img src={logo_UNSM} alt="logo_UNSM" /></div>
        <div className="cajaFooterTexto">
          <h1 className="text-success">UNIVERSIDAD NACIONAL SAN MARTIN</h1>
        </div>
        <div className="logoHeaderGob"><img src={logo_GobiernoRegional} alt="logo_GobiernoRegional" /></div>
      </div>
    </div>
  );
}

export default Header;
