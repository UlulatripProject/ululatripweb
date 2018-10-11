import React from 'react'
import styled from 'react-emotion'
import { FaPlayCircle } from 'react-icons/fa'
import theme from '../../styles/constants'
import bgheader from '../../assets/images/bgheader.png'
import Button from '../button/ButtonPink'

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const BackgroundImage = styled('img')`
  position: absolute;
`

const BigTitle = styled('div')`
  position: relative;
  margin-top: 13.09%;
  align-self: center;
`
const MidTitle = styled('div')`
  position: relative;
  margin-top: 16px;
  align-self: center;
  @media (max-width: 1024px) {
    height: 60px;
    width: 700px;
  }
`

const PlayIcon = styled('div')`
  position: relative;
  color: ${theme.colors.white};
  align-self: center;
  margin-top: 32px;
  cursor: pointer;
  font-size: 55px;
  &:hover {
    color: ${theme.colors.primary};
  }
`

const ButtonWrapper = styled('div')`
  position: relative;
  align-self: center;
  margin-top: 40px;
`

const Header = () => {
  return (
    <Container>
      <BackgroundImage
        src={bgheader}
        alt="bgheader"
        className="w-full h-auto"
      />
      <BigTitle className="bigtitle">
        Experience The New Within Indonesia
      </BigTitle>
      <MidTitle className="midtitle">
        Ululatrip is an experience-based travel marketplace that connects
        Tripper and Trip Host to explore Indonesia through an unique, different
        trips.
      </MidTitle>
      <PlayIcon>
        <FaPlayCircle />
      </PlayIcon>
      <ButtonWrapper>
        <Button />
      </ButtonWrapper>
    </Container>
  )
}
export default Header
