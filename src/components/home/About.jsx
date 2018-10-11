import React from 'react'
import styled from 'react-emotion'
import {
  FaInstagram,
  FaFacebookSquare,
  FaLine,
  FaWhatsapp,
} from 'react-icons/fa'
import theme from '../../styles/constants'
import logopink from '../../assets/icons/logo/UluPink.png'

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`
const Title = styled('div')`
  margin-top: 50px;
`
const LogoPink = styled('img')`
  width: 64px;
`

const WrapperLogo = styled('div')`
  margin-top: 24px;
  text-align: center;
  align-self: center;
  cursor: pointer;
`

const Description = styled('div')`
  align-self: center;
  margin-top: 24px;
`
const IconContainer = styled('div')`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Icons = styled('div')`
  color: ${theme.colors.socialgrey};
  cursor: pointer;
  font-size: 46px;
  margin-left: 36px;
  margin-right: 36px;
  &:hover {
    opacity: 0.5;
  }
`

const SocialIcons = () => {
  return (
    <IconContainer>
      <Icons>
        <FaInstagram />
      </Icons>
      <Icons>
        <FaFacebookSquare />
      </Icons>
      <Icons>
        <FaLine />
      </Icons>
      <Icons>
        <FaWhatsapp />
      </Icons>
    </IconContainer>
  )
}

const About = () => {
  return (
    <Container>
      <Title className="about">About Us</Title>
      <WrapperLogo>
        <LogoPink src={logopink} />
      </WrapperLogo>
      <Description className="descrip">
        Ululatrip is an experience-based travel marketplace that connects
        Tripper and Trip Host to explore Indonesia through an unique, different
        trips. You’ll find a wide selection of unique trips, crafted by Trip
        Hosts.
      </Description>
      <SocialIcons />
    </Container>
  )
}

export default About
