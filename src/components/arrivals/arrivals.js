import React from "react"
import "./arrivals.scss"

const Arrivals = () => (
  <div className="arrival-container" id="newArrivals">
    <h1 className="heading-1 text-center pt-5">Request your favourites</h1>
    <div className="row">
      <div className="col-md-6 mx-auto">
        <p className="text-center about-header pt-5 heading-4 text-sky-blue">
          We try to keep our collection updated. Let us know what you want and
          we will try to get it for you.
        </p>
      </div>
    </div>
    <div className="row pb-5 mt-3">
      <div className="col-md-12 know-more-container text-center">
        <div className="know-more">
          <a
            href="https://forms.gle/PjAoVxd9k2ukLvWv7"
            target="_blank"
            rel="noreferrer"
          >
            Request Book
          </a>
        </div>
      </div>
    </div>
    <hr />
  </div>
)
export default Arrivals
