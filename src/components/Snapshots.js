import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-creative/css/creative.css'
import 'font-awesome/css/font-awesome.css'
import SnapshotItem from './SnapshotItem'

const Snapshots = () => {
  return (
    <section className="p-0" id="snapshots">
      <div style={{ height: '56px' }} />
      <div className="container-fluid">
        <div className="row no-gutter popup-gallery">
          <SnapshotItem
            Link="/"
            Image="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/thumbnails/1.jpg"
            Category="Outing"
            Name="Tunas 2017"
          />
          <SnapshotItem
            Link="/"
            Image="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/thumbnails/2.jpg"
            Category="Seminar"
            Name="Webinar Bersama Wibias"
          />
          <SnapshotItem
            Link="/"
            Image="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/thumbnails/3.jpg"
            Category="Outing"
            Name="Uber Outing 2017"
          />
        </div>
      </div>
    </section>
  )
}

export default Snapshots
