

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./globals/navbar/Navbar"
import Footer from '../components/Footer'
const Layout = ({ children }) => {
  

  return (
    <>
    <Navbar/>
        <main>{children}</main>
       <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
