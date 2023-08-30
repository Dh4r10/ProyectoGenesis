import React from 'react'
import TablaPrueba from './TablaPrueba'
import Tabla2 from './Tabla2'
import { Outlet, Route, Routes } from 'react-router-dom'

export default function Cuerpo() {
  return (
    <main className="bg-light">
      <div className="p-2">
        <nav className="px-3 py-2 bg-white rounded shadow ">
          <i className="ri-menu-line sidebar-toggle me-3 d-block d-md-none"></i>
          <h5 className="fw-bold mb-0 me-auto">PANEL ADMINISTRATIVO</h5>
          <div className="dropdown">
            <div className="d-flex align-items-center cursor-pointer dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="me-2 d-none d-sm-block">Psicologa</span>
              <span className="navbar-profile-image py-2 d-flex align-items-center justify-content-center">
                <i className="bi bi-person-circle fs-3"></i>
              </span>
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="tablaprueba" element={<TablaPrueba />} />
          <Route path="tabla2" element={<Tabla2 />} />
        </Routes>
        <Outlet></Outlet>
      </div>
    </main> 
  )
}
