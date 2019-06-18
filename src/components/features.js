import React from "react"
import styled from "styled-components"
import { CalloutHeaderText, CalloutText } from "../utils/theme"

const FeatureGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`
const FeatureRow = styled.div`
  display: flex;
  justify-content: space-around;
`
const Features = ({ siteTitle }) => (
  <>
    <CalloutHeaderText>
      Hiring a creative has never been easier
    </CalloutHeaderText>
    <FeatureGroup>
      <FeatureRow>
        <CalloutText>Search locally</CalloutText>
        <CalloutText>Transparent pricing</CalloutText>
      </FeatureRow>
      <FeatureRow>
        <CalloutText>Verified reviews</CalloutText>
        <CalloutText>Book directly & pay online</CalloutText>
      </FeatureRow>
    </FeatureGroup>
  </>
)

export default Features
