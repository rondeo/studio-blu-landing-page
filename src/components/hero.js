import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {
  colors,
  ContentContainer,
  FlexCenter,
  HeroHeaderText,
  HeroText,
} from "../utils/theme"
import Button from "./button"

import ProductImage1 from "../components/product-image-1"

const Background = styled.div`
  background-color: ${colors.pink};
  top: 0;
  height: 78.58333333vw;
  width: 100%;
  position: absolute;
  margin: 0;
  left: 0;
`
const Container = styled.div`
  display: flex;
  margin: 10rem 0;
`

const Hero = () => (
  <Background>
    <ContentContainer>
      <Container>
        <div>
          <HeroHeaderText>
            A marketplace built for creatives, by creatives
          </HeroHeaderText>
          <Button />
        </div>
        <HeroText>
          Studio Blu makes it easy to find and hire creative professionals in
          your area
        </HeroText>
      </Container>
    </ContentContainer>
    <FlexCenter>
      <ProductImage1 />
    </FlexCenter>
  </Background>
)

export default Hero
