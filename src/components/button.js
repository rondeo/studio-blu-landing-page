import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { colors } from "../utils/theme"

const ButtonStyle = styled.button`
  background: ${colors.lightBlue};
  border-radius: 3px;
  border: none;
  padding: 5px 20px;
  margin: 10px;
`

const ButtonText = styled(Link)`
  color: ${colors.blue};
  text-decoration: none;
  font-family: Open sans;
  font-size: 16px;
`

const Button = () => (
  <ButtonStyle>
    <ButtonText to="/">Request Access</ButtonText>
  </ButtonStyle>
)

export default Button
