/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title,
          author,
          description
        }
      }
    }
  `)

  return (
    <div id="app">
        <Header siteTitle={data.site.siteMetadata.author} siteDescription={data.site.siteMetadata.description} />

        <div className="w-full max-w-screen-xl relative mx-auto px-6">
            <main className="px-6">
                {children}
            </main>
        </div>

        <Footer copyright={data.site.siteMetadata.author}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
