import React, { useState } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"
class Navbar extends React.Component {
  state = {
    navbarOpen: false,
  }

  handelNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handelNavbar={this.handelNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}

export default Navbar

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
