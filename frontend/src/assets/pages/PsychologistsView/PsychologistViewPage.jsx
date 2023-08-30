import React from 'react'
import '../PsychologistsView/estilos/css/style.css';
import '../PsychologistsView/estilos/css/bootstrap.min.css';
import '../PsychologistsView/estilos/js/jquery.min.js';
import '../PsychologistsView/estilos/js/bootstrap.bundle';
import '../PsychologistsView/estilos/js/script';
import '../PsychologistsView/estilos/js/bootstrap.esm';

import SiderBard from './components/SiderBard';
import Cuerpo from './components/Cuerpo';

export default function PsychologistViewPage() {
  return (
    <div>
      <SiderBard></SiderBard>
      <div className="sidebar-overlay"></div>
      <Cuerpo></Cuerpo>
    </div>
  )
}
