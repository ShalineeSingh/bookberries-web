import React from "react"

import "./index.scss"
import Layout from "../components/layout"

import SEO from "../components/seo"
import About from "../components/about/about"
import Arrivals from "../components/arrivals/arrivals"
import Contact from "../components/contact/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Bookberries Bookstore | Buy books at lowest prices in Patna" />
    {/* ADD HOMEPAGE  CODE HERE */}
    <div className="row homepage-container">
      <div className="col-md-12 text-center">
        <div className="text-container">
          <h1 className="heading-1">Welcome to Bookberries!</h1>
          <p className="desc">
            We understand how much you love reading and so we have brought the
            world of books to you.
          </p>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <div className="coming-soon-container">
          <p className="coming-soon-text mb-0">Visit our store and check out our latest collection.</p>
          <p className="coming-soon-text mb-0">
            @2nd Floor, Opp. Pillar-12, Above Allahabad Bank, Jagdeo Path Mor
          </p>
        </div>
      </div>
      {/* <div className="col-md-12 know-more-container text-center">
        <div className="know-more">Know More</div>
      </div> */}
    </div>
    <About />
    <Arrivals />
    <Contact />
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
