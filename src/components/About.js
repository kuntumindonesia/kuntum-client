import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-creative/css/creative.css'
import 'font-awesome/css/font-awesome.css'

const About = () => {
  return (
    <section className="bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-white">Ingin kuliah di NTU?</h2>
            <hr className="light" />
            <p className="text-faded">
              Nanyang Technological University, Singapura menjadi semakin
              populer di kalangan pelajar SMA saat ini. Perbedaan kultur antara
              Indonesia dan Singapura tidak jarang menjadi kekhawatiran para
              calon mahasiswa. Tenang saja, mahasiswa muslim Indonesia di NTU
              siap membantumu!
            </p>
            <a className="btn btn-default btn-xl js-scroll-trigger" href="">
              Ya, saya ingin kuliah di NTU!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
