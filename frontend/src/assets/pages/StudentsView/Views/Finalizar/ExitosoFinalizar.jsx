import React, { useState, useEffect } from 'react'
import "../../../../styles/Finalizar.css"
import loading_Final from '../../../../images/loading_Final.gif'
import loading_Estatico from '../../../../images/loading_Estatico.jpeg'
import Logout from '../../../../components/Buttons/Logout'


const ExitosoFinalizar = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1600)
    }, [])
    return (
        <>
            <div className="finalizarCaja" style={{ height: "48vh" }}>
                <div className='loadingCaja'>
                    <img className='loadingGif' src={loading ? loading_Final : loading_Estatico} alt="loadingFinal" />
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-aos-duration="600">
                        <p className={'finalizarText'}>ENCUESTA FINALIZADA CON EXITO</p>
                    </div>
                </div>
            </div>
            <Logout />
        </>
    )
}

export default ExitosoFinalizar