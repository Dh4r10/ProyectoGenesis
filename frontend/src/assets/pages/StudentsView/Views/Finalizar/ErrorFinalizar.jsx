import React from 'react'
import "../../../../styles/Finalizar.css"
import loading_Error from '../../../../images/loading_Error.gif'
import LogoutInicio from '../../../../components/Buttons/LogoutInicio'

const ErrorFinalizar = () => {

    return (
        <>
            <div className="finalizarCaja" style={{ height: "48vh" }}>
                <div className='loadingCaja'>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="300"><img className='loadingGif' src={loading_Error} alt="loadingError" /></div>
                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="300">
                        <p className='finalizarText' style={{ color: "red" }}>HA OCURRIDO UN ERROR</p>
                    </div>
                </div>
            </div>
            <LogoutInicio />
        </>
    )
}

export default ErrorFinalizar