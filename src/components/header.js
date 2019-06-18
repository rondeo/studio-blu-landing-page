import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../utils/theme"
import Button from "./button"
import logo from "../images/logo.svg"

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 8px 0;
  ${'' /* background: ${colors.lightPink}; */}

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`
const HeaderContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  padding: 0 20px;
  display: flex;
  align-items: center;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`
const NavLink = styled(Link)`
  margin-left: 20px;
  padding: 8px 0;
  font-size: 16px;
  text-decoration: none;
  color: ${colors.blue};
  min-height: 1.5em;
  font-family: Open sans;
`
const NavButton = styled(Button)`
  margin: 20px;
`
const Logo = styled.img`
  margin-bottom: 0;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContentWrapper>
      <Link to="/"><Logo src={logo} width="150px"/></Link>
      <Nav>
        <NavLink to="/">Product</NavLink>
        <NavLink to="/">FAQ</NavLink>
        <NavLink to="/">Company</NavLink>
        <NavButton />
      </Nav>
    </HeaderContentWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
