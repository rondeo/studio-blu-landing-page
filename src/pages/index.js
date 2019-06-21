import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import {
  colors,
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
import ProductImage1 from "../components/product-image-1"
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
const ContentContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 50px;
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
  ${'' /* transform: translate(-10%, -10%); */}

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
    <BackgroundColorMarbling color={colors.lightestPink}>
      <MarbleBgImage src={marble_1} />
      <ContentContainer>
        <CenterContentOverImage>
          <FlexCenter>
            <HeroHeaderText>
              A marketplace built for creatives, by creatives
            </HeroHeaderText>
            <HeroText>
              Studio Blu makes it easy to find and hire creative professionals
              in your area
            </HeroText>
            <Button />
          </FlexCenter>
        </CenterContentOverImage>
      </ContentContainer>
    </BackgroundColorMarbling>
    <BackgroundColor color={colors.lightestPink} height="1500px">
      <WideContentContainer>
        <Text>
          <MainHeaderText>
            Make your next creative project a reality
          </MainHeaderText>
          <MainText>
            At Studio Blu, we believe hiring a creative professional should be
            simple, fun, and stress-free.
          </MainText>
        </Text>
        <ProductImage1 />
      </WideContentContainer>
      <WideContentContainer>
        <ProductImage2 />
        <Text>
          <MainHeaderText>Browse high-quality portfolio imagery</MainHeaderText>
          <MainText>
            Gather inspiration and save your favorites. Every Studio Blu
            portfolio is created by a trusted (local!) creative professional.
          </MainText>
        </Text>
      </WideContentContainer>
    </BackgroundColor>
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
      {/* <ContentContainer> */}
        <CenterContentOverImage>
          <Company />
        </CenterContentOverImage>
      {/* </CenterContentContainer> */}
    </BackgroundColorMarbling>
    <BackgroundColor color={colors.lightestPink}>
      <ContentContainer>
      <FlexCenter>
        <Team />
        </FlexCenter>
      </ContentContainer>
    </BackgroundColor>
  </Layout>
)

export default IndexPage
