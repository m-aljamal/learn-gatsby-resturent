

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import Navbar from "./globals/navbar/Navbar"

const Layout = ({ children }) => {
  

  return (
    <>
    <Navbar/>
        <main>{children}</main>
       
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
