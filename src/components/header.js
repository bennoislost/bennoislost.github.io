import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
    <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <header className="md:flex justify-between px-5 py-6">
            <a href="#" className="font-medium leading-6 text-gray-900 text-lg block">{siteTitle}</a>
            <span className="font-serif text-gray-600">{siteDescription}</span>
        </header>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
