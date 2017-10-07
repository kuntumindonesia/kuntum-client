import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-creative/css/creative.css'
import 'font-awesome/css/font-awesome.css'

const Activities = () => {
  return (
    <section id="activities">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Kegiatan Kami</h2>
            <hr class="primary" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box">
              <i class="fa fa-4x fa-diamond text-primary sr-icons" />
              <h3>Kajian</h3>
              <p class="text-muted">
                Kajian setiap minggu yang dilaksanakan bersama alumni KUNTUM.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box">
              <i class="fa fa-4x fa-paper-plane text-primary sr-icons" />
              <h3>Seminar</h3>
              <p class="text-muted">
                Seminar bulanan dengan narasumber alumni KUNTUM.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box">
              <i class="fa fa-4x fa-newspaper-o text-primary sr-icons" />
              <h3>Media Karya</h3>
              <p class="text-muted">
                Mengembangkan kreativitas anggota KUNTUM.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="service-box">
              <i class="fa fa-4x fa-heart text-primary sr-icons" />
              <h3>Outing</h3>
              <p class="text-muted">
                Menjalin kebersamaan dengan warga KUNTUM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
