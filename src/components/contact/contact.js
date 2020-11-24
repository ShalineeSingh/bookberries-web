import { Link, useStaticQuery } from "gatsby"
import React from "react"
import "./contact.scss"
import { graphql } from "graphql"

const Contact = () => {
  // const map = useStaticQuery(graphql`
  //   query StaticMapQuery {
  //     staticMap {
  //       childFile {
  //         childImageSharp {
  //           fluid {
  //             # or fixed
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="contact-container">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6 address-container">
          <p className="text-sky-blue mb-1">Address</p>
          <p>
            Third Floor,
            <br /> Kalyan Bhavan, Jagdeo Path
            <br /> Bailey Road, Patna,
            <br />
            Bihar - 800 014
          </p>
          <p className="text-sky-blue pt-3 mb-1">Contact</p>
          <p>+91-7041700667</p>
          <p className="text-sky-blue pt-3 mb-1">Email Address</p>
          <p>bookberriespatna@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
export default Contact
