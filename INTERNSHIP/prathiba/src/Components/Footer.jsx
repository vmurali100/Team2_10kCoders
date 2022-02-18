import React from 'react'

export const Footer = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-dark" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
        <a className="nav-link" href="#"  style={{color:"red"}}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:"red"}}>Privacy-Policy</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#"  style={{color:"red"}}>Terms and Conditions</a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:"white"}}>@copyRight:E-Prathiba</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:"white"}}>poweredby:<span style={{color:"red"}}>
              Errortechonolgies.com</span></a>
        </li>
      </ul>
</nav>
    </div>
  )
}
