import React, { useContext } from "react";
import Button from "@mui/material/Button";

import VistaUserContext from '../../contexts/VistaUserContext'

function RegresarFinalizar() {

  let { onRetroceder } = useContext(VistaUserContext)

  return (
    <div className="buttons d-flex align-items-center p-3 my-3 text-white bg-none rounded shadow-sm"
      style={{ height: "100px" }} >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button variant="outlined" color="primary" onClick={onRetroceder} style={{ height: "50px" }}>
          Regresar
        </Button>
        <Button type="submit" variant="outlined" color="primary" style={{ height: "50px" }}>
          Finalizar
        </Button>
      </div>
    </div>
  );
}

export default RegresarFinalizar;