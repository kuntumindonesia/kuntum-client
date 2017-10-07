import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-creative/css/creative.css'
import 'font-awesome/css/font-awesome.css'

const Header = () => {
  return (
    <header className="masthead">
      <div className="header-content">
        <div className="header-content-inner">
          <h1 id="homeHeading">Menjalin Ukhuwah di Perantauan</h1>
          <hr />
          <p>
            Keluarga NTU Muslim (KUNTUM) Indonesia merupakan komunitas yang
            bertujuan untuk memelihara kekeluargaan antara sesama pelajar muslim
            Indonesia di Nanyang Technological University, Singapura.
          </p>
          <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
            Cari tahu bagaimana kami dapat membantu Anda!
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
