import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import { colors } from "../utils/theme"
import Button from "./button"
import logo from "../images/logo.svg"

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: ${colors.pink};

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
const BottomBorder = styled.div`
  border-bottom: 2px white solid;
  margin: 0 20px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  visibility: hidden;

  @media only screen and (min-width: 690px) {
    visibility: visible;
  }
`
const NavLink = styled(Link)`
  margin-left: 20px;
  padding: 8px 0;
  font-size: 16px;
  text-decoration: none;
  color: white;
  min-height: 1.5em;
  font-family: Open sans;
`
const NavButton = styled(Button)`
  margin: 20px;
`
const Logo = styled.img`
  margin-bottom: 0;
  vertical-align: middle;
`
const MenuButton = styled.button`
  background: none;
  border: none;
  display: block;

  @media only screen and (min-width: 690px) {
    display: none;
  }
`

const MobileNav = styled.nav`
  visibility: ${props => (props.menuVisibility ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${colors.blue};
  position: fixed;
  z-index: 2;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  min-height: 1.5em;
  opacity: 1;
  padding: 80px 0px;
  overflow: auto;
  transition: opacity 300ms cubic-bezier(0.6, 0.39, 0.74, 0.88) 0s,
    visibility 300ms ease 0s;

  @media only screen and (min-width: 690px) {
    display: none;
  }
`
const MobileNavLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: white;
  min-height: 1.5em;
  font-family: Open sans;
`

const CloseMenuButton = styled.button`
  background: none;
  border: none;
  border: 0;
  background: 0;
  outline: 0;
  position: fixed;
  top: 12px;
  right: 22px;
  width: 50px;
  height: 50px;
  opacity: 0.5;
  transition: opacity 200ms ease;
  z-index: 10;
  cursor: pointer;
`

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <HeaderWrapper>
        <HeaderContentWrapper>
          <Link to="/">
            <Logo src={logo} width="150px" />
          </Link>
          <Nav>
            <NavLink to="/">Product</NavLink>
            <NavLink to="/">FAQ</NavLink>
            <NavLink to="/">Company</NavLink>
            <NavButton />
          </Nav>
          <MenuButton onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} color={colors.blue} />
          </MenuButton>
        </HeaderContentWrapper>
        <BottomBorder />
      </HeaderWrapper>
      <MobileNav menuVisibility={showMenu}>
        <CloseMenuButton onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={faTimes} color="white" />
        </CloseMenuButton>
        <MobileNavLink to="/">Product</MobileNavLink>
        <MobileNavLink to="/">FAQ</MobileNavLink>
        <MobileNavLink to="/">Company</MobileNavLink>
        <NavButton />
      </MobileNav>
    </>
  )
}

export default Header
