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
        <div className="col-md-6">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="600"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=angeethi%20patna&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
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
