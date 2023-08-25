import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import VistaUserContext from '../../contexts/VistaUserContext'
import Button from "@mui/material/Button";

function Logout() {
  let { logoutUser } = useContext(AuthContext);
  let { onRetroceder } = useContext(VistaUserContext);

  return (
    <div className="buttons d-flex align-items-center p-3 my-3 text-white bg-none rounded shadow-sm"
      style={{ height: "100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button variant="outlined" color="primary" onClick={onRetroceder} style={{
          height: "50px"
        }}>
          Regresar
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

export default Logout;