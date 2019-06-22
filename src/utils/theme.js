import styled from "styled-components"

const colors = {
  lightPink: "#FBE7E7",
  lightestPink: "#FCF2F2",
  pink: "#FF94B3",
  lightBlue: "#ABD2FF",
  blue: "#2252B2",
  darkBlue: "#08144D",
  red: "#F13F33",
}

const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroHeaderText = styled.h1`
  color: white;
  font-size: 5rem;
  line-height: 5rem;
  margin-top: 0;
  max-width: 70rem;
`
const HeroText = styled.h2`
  color: white;
  font-family: Merriweather;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.3rem;
  font-size: 1rem;
`
const MainHeaderText = styled.h1`
  color: ${colors.blue};
  font-size: 30px;
  margin: 0 0 1rem 0;
  line-height: 1.8rem;
  letter-spacing: -1px;
`
const MainText = styled.h2`
  color: ${colors.blue};
  font-size: 14px;
  font-family: Merriweather;
  font-weight: 300;
  margin: 0;
  line-height: 1rem;
`
const CalloutHeaderText = styled(MainHeaderText)`
  color: ${colors.lightBlue};
  text-align: center;
`
const CalloutText = styled.h2`
  color: ${colors.lightBlue};
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 300;
  line-height: 1rem;
  max-width: 250px;
  text-align: center;
`
const Header = styled(CalloutText)`
  color: ${colors.blue};
  text-align: left;
  text-transform: none;
  max-width: none;
  margin-bottom: 0.7rem;
`

const Paragraph = styled.p`
  color: ${colors.blue};
  font-size: 14px;
`
export {
  colors,
  ContentContainer,
  FlexCenter,
  HeroHeaderText,
  HeroText,
  MainHeaderText,
  MainText,
  CalloutHeaderText,
  CalloutText,
  Header,
  Paragraph,
}
