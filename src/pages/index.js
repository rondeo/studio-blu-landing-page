import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import {
  colors,
  ContentContainer,
  HeroHeaderText,
  HeroText,
  MainHeaderText,
  MainText,
  CalloutHeaderText,
} from "../utils/theme"
import marble_1 from "../images/marble_1.svg"
import marble_2 from "../images/marble_2.svg"
import marble_3 from "../images/marble_3.svg"

import Layout from "../components/layout"
import Hero from "../components/hero"
import ProductImage2 from "../components/product-image-2"
import SEO from "../components/seo"
import Button from "../components/button"
import Features from "../components/features"
import FAQ from "../components/faq"
import Company from "../components/company"
import Team from "../components/team"

const BackgroundColorMarbling = styled.section`
  position: relative;
  background: ${props => props.color};
  height: ${props => (props.height ? props.height : "700px")};
`
const BackgroundColor = styled.section`
  background: ${props => props.color};
  padding: 100px 0;
`
const WideContentContainer = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CenterContentOverImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ContentOverImage = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  ${"" /* transform: translate(-10%, -10%); */}
`

const MarbleBgImage = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    url(${props => props.src});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const MarbleBgImage2 = styled.div`
  background: url(${props => props.src});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Text = styled.div`
  margin: 0 50px;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    {/* <WideContentContainer>
      <ProductImage2 />
      <Text>
        <MainHeaderText>Browse high-quality portfolio imagery</MainHeaderText>
        <MainText>
          Gather inspiration and save your favorites. Every Studio Blu portfolio
          is created by a trusted (local!) creative professional.
        </MainText>
      </Text>
    </WideContentContainer>
    <BackgroundColorMarbling color={colors.blue} height="500px">
      <MarbleBgImage2 src={marble_2} />
      <ContentContainer>
        <CenterContentOverImage>
          <Features />
        </CenterContentOverImage>
      </ContentContainer>
    </BackgroundColorMarbling>
    <BackgroundColor color={colors.lightestPink}>
      <ContentContainer>
        <FAQ />
      </ContentContainer>
    </BackgroundColor>
    <BackgroundColor color={colors.blue}>
      <ContentContainer>
        <FlexCenter>
          <CalloutHeaderText>
            We're adding creatives every day
          </CalloutHeaderText>
          <Button />
        </FlexCenter>
      </ContentContainer>
    </BackgroundColor>
    <BackgroundColorMarbling color={colors.lightestPink}>
      <MarbleBgImage src={marble_3} />
      <CenterContentOverImage>
        <Company />
      </CenterContentOverImage>
    </BackgroundColorMarbling>
    <BackgroundColor color={colors.lightestPink}>
      <ContentContainer>
        <FlexCenter>
          <Team />
        </FlexCenter>
      </ContentContainer>
    </BackgroundColor> */}
  </Layout>
)

export default IndexPage
