import React, { useContext } from 'react'
import "../../../../styles/Finalizar.css"
import Encabezado from '../../../../components/Encabezado'
import ExitosoFinalizar from './ExitosoFinalizar'
import ErrorFinalizar from './ErrorFinalizar'

import VistaUserContext from '../../../../contexts/VistaUserContext'

function Finalizar() {

    let { statusText } = useContext(VistaUserContext)

    console.log("El status es:", statusText)
    return (
        <>
            <Encabezado />
            {statusText == "Created" ? (<ExitosoFinalizar />) : (<ErrorFinalizar />)}

        </>
    )
}

export default Finalizar