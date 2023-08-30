
import React from 'react'
import {Link} from 'react-router-dom'

export default function SiderBard() {
  return (
    <div className="sidebar position-fixed top-0 bottom-0 bg-white border-end">
    <div className="d-flex align-items-center p-3">
      <a href="#" className="sidebar-logo text-uppercase fw-bold text-decoration-none text-indigo fs-4">ADMIN</a>
      <i className="sidebar-toggle ri-arrow-left-circle-line ms-auto fs-5 d-none d-md-block"></i>
    </div>
    <ul className="sidebar-menu p-3 m-0 mb-0">
      <li className="sidebar-menu-item active">
        <a href="#">
          <i className="ri-dashboard-line sidebar-menu-item-icon"></i>
          Inicio
        </a>
      </li>
      <li className="sidebar-menu-divider mt-3 mb-1 text-uppercase">Vistas</li>
      <li className="sidebar-menu-item has-dropdown">
        <Link to={'tablaprueba'}>
          <i className="ri-pages-line sidebar-menu-item-icon"></i>
          TABLA 1
        </Link>
      </li>
      <li className="sidebar-menu-item has-dropdown">
        <Link to={'tabla2'}>
          <i className="ri-pages-line sidebar-menu-item-icon"></i>
          TABLA 2
        </Link>
      </li>

    </ul>
  </div>
  )
}
