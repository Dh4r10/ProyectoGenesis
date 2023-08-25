import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import VistaUserContext from '../../contexts/VistaUserContext'

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../../styles/vistaUsuario.css"

import DatosPersonales from "./Views/DatosPersonales";
import Ansiedad from "../../pages/StudentsView/Views/Ansiedad";
import Psicosis from "../../pages/StudentsView/Views/Psicosis";
import Epilesia from "../../pages/StudentsView/Views/Epilesia";
import Alcoholismo from "../../pages/StudentsView/Views/Alcoholismo";
import Finalizar from './Views/Finalizar/PrincipalFinalizar'

const HomePage = () => {

  let { authTokens, logoutUser } = useContext(AuthContext);
  let { activarStep } = useContext(VistaUserContext)

  useEffect(() => {
    getNotes();
  }, []);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  const getNotes = async () => {
    const apiUrl = "http://localhost:8000/api/perfiles/";

    axios
      .get(apiUrl, { headers })
      .then(function (response) {
        console.log(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        logoutUser();
      })
  };

  return (
    <div className="container pt-5" style={{ background: "none", }}>

      <Stepper activeStep={activarStep}>
        <Step className="cursor-pointer"   >
          <StepLabel id="datosPerLabel" className="labelStep"><p className="labelParrafo">Datos</p></StepLabel>
        </Step>
        <Step>
          <StepLabel id="ansiedadLabel" className="labelStep"><p className="labelParrafo">Ansiedad</p></StepLabel>
        </Step>
        <Step>
          <StepLabel id="psicosisLabel" className="labelStep"><p className="labelParrafo">Psicosis</p></StepLabel>
        </Step>
        <Step>
          <StepLabel id="epilpesiaLabel" className="labelStep"><p className="labelParrafo">Epilesia</p></StepLabel>
        </Step>
        <Step>
          <StepLabel id="alcoholismoLabel" className="labelStep"><p className="labelParrafo">Alcoholismo</p></StepLabel>
        </Step>
        <Step>
          <StepLabel id="finalizarLabel" className="labelStep"><p className="labelParrafo">Finalizar</p></StepLabel>
        </Step>
      </Stepper>

      {activarStep === 0 && (
        <DatosPersonales />
      )}

      {activarStep === 1 && (
        <Ansiedad />
      )}

      {activarStep === 2 && (
        <Psicosis />
      )}

      {activarStep === 3 && (
        <Epilesia />
      )}

      {activarStep === 4 && (
        <Alcoholismo headers={headers} />
      )}

      {activarStep === 5 && (
        <Finalizar />
      )}
    </div>
  );
};

export default HomePage;
