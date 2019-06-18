import React from "react"
import styled from "styled-components"
import { colors, MainHeaderText, Header, Paragraph } from "../utils/theme"

import letisha from "../images/letisha.png"
import sam from "../images/sam.png"

const Container = styled.div`
  display: flex;
  align-items: center;
`
const HeaderText = styled(MainHeaderText)`
  color: ${colors.pink};
  margin-bottom: 1.5rem;
`
const NameText = styled(Header)`
  margin: 0 0 5px 0;
  text-align: center;
  color: ${colors.pink}
`
const Image = styled.img`
  width: 200px;
  margin: 0 30px 10px 30px;
`
const RoleText = styled.h2`
  font-size: 16px;
  color: ${colors.pink};
  margin: 0;
  font-weight: 300;
  text-align: center;
`

const Team = () => (
  <>
    <HeaderText>Our Team</HeaderText>
    <Container>
    <div>
    <Image src={letisha}/>
    <NameText>Letisha Perry</NameText>
    <RoleText>CEO</RoleText>
    </div>
    <div>
    <Image src={sam}/>
    <NameText>Samantha Andrews</NameText>
    <RoleText>CTO</RoleText>   
    </div> 
    </Container>
  </>
)

export default Team
