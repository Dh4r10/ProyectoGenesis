import React, { createContext, useState, useContext, useMemo } from "react";
import AuthContext from '../contexts/AuthContext'

import { funcionFinalizar } from '../functions/StudentsViewFunctions/Functions'

const VistaUserContext = createContext();

export default VistaUserContext;

export const VistaUserProvider = ({ children }) => {

    let { user } = useContext(AuthContext)

    const [activarStep, setActivarStep] = useState(0);
    const [datosPersonales, setDatosPersonales] = useState({});
    const [ansiedad, setAnsiedad] = useState({});
    const [psicosis, setPsicosis] = useState({});
    const [epilisia, setEpilesia] = useState({});
    const [alcoholismo, setAlcoholismo] = useState({});

    const [facu, setFacu] = useState("")
    const [statusText, setStatusText] = useState("")

    const onRetroceder = () => {
        if (activarStep > 0) {
            setActivarStep((retroceder) => retroceder - 1);
        }
    };

    const funcionSiguiente = () => {
        if (activarStep < 5) {
            setActivarStep((siguiente) => siguiente + 1);
        }
    };

    const onComebackInicio = () => {
        if (activarStep == 5) {
            setActivarStep(0);
        }
    };

    const onSubmitDatosPersonales = (data) => {
        const valor = data;
        const valorFinal = {
            ...valor,
            idusuario: user.user_id,
        };

        console.log("Datos Personales", valorFinal);
        setDatosPersonales(valorFinal);
        funcionSiguiente();
    };

    const onSubmitAnsiedad = (data2) => {
        const valor2 = data2;
        for (const clave in valor2) {
            valor2[clave] = parseInt(valor2[clave], 10);
        }
        const valorFinal2 = {
            ...valor2,
            idusuario: user.user_id,
        };

        console.log("Ansiedad", valorFinal2);
        setAnsiedad(valorFinal2);
        funcionSiguiente();
    };

    const onSubmitPsicosis = (data3) => {
        const valor3 = data3;
        for (const clave in valor3) {
            valor3[clave] = parseInt(valor3[clave], 10);
        }
        const valorFinal3 = {
            ...valor3,
            idusuario: user.user_id,
        };

        console.log("Psicosis", valorFinal3);
        setPsicosis(valorFinal3);
        funcionSiguiente();
    };


    const onSubmitEpilesia = (data4) => {
        const valor4 = data4;
        for (const clave in valor4) {
            valor4[clave] = parseInt(valor4[clave], 10);
        }
        const valorFinal4 = {
            ...valor4,
            idusuario: user.user_id,
        };

        console.log("Epilepsia", valorFinal4);
        setEpilesia(valorFinal4);
        funcionSiguiente();
    };

    const onSubmitAlcoholismo = (data5, headers) => {
        const valor5 = data5;
        for (const clave in valor5) {
            valor5[clave] = parseInt(valor5[clave], 10);
        }
        const valorFinal5 = {
            ...valor5,
            idusuario: user.user_id,
        };

        console.log("Epilesia", valorFinal5);
        setAlcoholismo(valorFinal5);
        funcionFinalizar(datosPersonales, ansiedad, psicosis, epilisia, valorFinal5, headers, setStatusText);
        funcionSiguiente();
    };

    const contextValue = useMemo(() => {
        return { activarStep, setActivarStep, datosPersonales, ansiedad, psicosis, epilisia, alcoholismo, onSubmitDatosPersonales, onSubmitAnsiedad, onSubmitPsicosis, onSubmitEpilesia, onSubmitAlcoholismo, onRetroceder, onComebackInicio, facu, setFacu, statusText }
    }, [activarStep, setActivarStep, datosPersonales, ansiedad, psicosis, epilisia, alcoholismo, onSubmitDatosPersonales, onSubmitAnsiedad, onSubmitPsicosis, onSubmitEpilesia, onSubmitAlcoholismo, onRetroceder, onComebackInicio, facu, setFacu, statusText])

    return (
        <VistaUserContext.Provider value={contextValue}>
            {children}
        </VistaUserContext.Provider>
    );
}
