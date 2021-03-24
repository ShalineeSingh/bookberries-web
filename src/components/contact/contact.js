import React from "react"
import "./contact.scss"

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
                title="location"
                width="600"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=angeethi%20patna&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-6 address-container">
          <p className="text-sky-blue mb-1">Address</p>
          <p>
            Second Floor,
            <br /> Above Allahabad Bank, Jagdeo Path
            <br /> Bailey Road, Patna, Opposite Pillar - 12
            <br />
            Bihar - 800 014
          </p>
          <p className="text-sky-blue pt-3 mb-1">Contact/Whatsapp</p>
          <p>+91-9431622920</p>
          <p className="text-sky-blue pt-3 mb-1">Email Address</p>
          <p>bookberriespatna@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
export default Contact
