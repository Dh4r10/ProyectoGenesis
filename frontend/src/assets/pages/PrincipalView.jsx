import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

import StudentsViewPage from '../pages/StudentsView/StudensViewPage'
import PsychologistsView from '../pages/PsychologistsView/PsychologistViewPage'

const PrincipalView = () => {
    let { user } = useContext(AuthContext)
    let idPerfil = user.idperfil;
    return (
        // ()
        <>
            {idPerfil == 2 && (<PsychologistsView />)}
            {idPerfil == 3 && (<StudentsViewPage />)}
        </>
    )
}

export default PrincipalView