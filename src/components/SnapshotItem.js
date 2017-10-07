import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'startbootstrap-creative/css/creative.css'
import 'font-awesome/css/font-awesome.css'

const SnapshotItem = ({ Link, Image, Category, Name }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <a className="portfolio-box" href={Link}>
        <img className="img-fluid" src={Image} alt="" />
        <div className="portfolio-box-caption">
          <div className="portfolio-box-caption-content">
            <div className="project-category text-faded">{Category}</div>
            <div className="project-name">{Name}</div>
          </div>
        </div>
      </a>
    </div>
  )
}
export default SnapshotItem
