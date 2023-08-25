import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import VistaUserContext from '../../contexts/VistaUserContext'
import Button from "@mui/material/Button";

function LogoutInicio() {
  let { logoutUser } = useContext(AuthContext);
  let { onRetroceder, onComebackInicio } = useContext(VistaUserContext);

  return (
    <div className="buttons d-flex align-items-center p-3 my-3 text-white bg-none rounded shadow-sm"
      style={{ height: "100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button variant="outlined" color="primary" onClick={onComebackInicio} style={{
          height: "50px"
        }}>
          Volver al inicio
        </Button>

        <Button variant="outlined" color="primary" onClick={logoutUser} style={{
          height: "50px"
        }}>
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}

export default LogoutInicio;