import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-creative/css/creative.css'
import 'font-awesome/css/font-awesome.css'

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          KUNTUM INDONESIA
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                Tentang
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#activities">
                Kegiatan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#snapshots">
                Dokumentasi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
