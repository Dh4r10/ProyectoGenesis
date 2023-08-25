import { postDatos } from "./Post";
import {
  datosPerRuta,
  ansiedadRuta,
  psicosisRuta,
  epilepsiaRuta,
  alcoholismoRuta,
} from "../../api/apiRutas";

export const funcionFinalizar = async (
  datosPersonales,
  ansiedad,
  psicosis,
  epilepsia,
  data5,
  headers,
  setStatusText
) => {
  console.log("Datos Personales:", datosPersonales);
  postDatos(datosPerRuta, datosPersonales, headers, setStatusText);

  console.log("Ansiedad:", ansiedad);
  postDatos(ansiedadRuta, ansiedad, headers, setStatusText);

  console.log("Psicosis:", psicosis);
  postDatos(psicosisRuta, psicosis, headers, setStatusText);

  console.log("Epilepsia:", epilepsia);
  postDatos(epilepsiaRuta, epilepsia, headers, setStatusText);

  console.log("Alcoholismo:", data5);
  postDatos(alcoholismoRuta, data5, headers, setStatusText);
};

export const scrollToError = () => {
  const encuentaElError = document.querySelector(".signalError");

  if (encuentaElError) {
    encuentaElError.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
