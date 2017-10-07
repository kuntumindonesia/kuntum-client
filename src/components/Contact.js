import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-creative/css/creative.css'
import 'font-awesome/css/font-awesome.css'

const Contact = () => {
  return (
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading">Perlu bantuan?</h2>
            <hr class="primary" />
            <p>Hubungi kami lewat WhatsApp atau email berikut!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 ml-auto text-center">
            <i class="fa fa-phone fa-3x sr-contact" />
            <p>123-456-6789</p>
          </div>
          <div class="col-lg-4 mr-auto text-center">
            <i class="fa fa-envelope-o fa-3x sr-contact" />
            <p>
              <a href="mailto:moderator.kuntum@gmail.com">
                moderator.kuntum@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
