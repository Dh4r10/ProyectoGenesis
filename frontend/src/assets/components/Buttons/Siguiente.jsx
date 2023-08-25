import React from "react";
import '../../styles/Buttons.css'
import Button from "@mui/material/Button";

function Siguiente() {

  return (
    <div>
      <div className="buttons d-flex align-items-center p-3 my-3 text-white rounded shadow-sm"
        style={{ height: "100px" }} >
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            width: "100%",
          }}
        >
          <Button id="buttonSiguiente" type="submit" variant="outlined" color="primary"
            style={{ height: "50px" }}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Siguiente;