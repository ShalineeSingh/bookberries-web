import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../../components/image"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header-container clearfix">
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="logo-img">
        <Link to="/">
          <Image alt="Bookberry icon" filename="logo-circle.png" />
          <span className="header-text">{siteTitle}</span>
        </Link>
      </div>
      <ul className="nav navbar-nav menu-items">
        {/* <li className="item">
          <a href="#newArrivals">New Arrivals</a>
        </li> */}
      </ul>
      {/* <div className="menu-items float-md-right">
        <span className="item">
          <a href="#newArrivals">New Arrivals</a>
        </span>
        <span className="item">Search Books</span>
        <span className="item">Find Us</span>
      </div> */}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
