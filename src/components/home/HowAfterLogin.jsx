import React from 'react'
import styled from 'react-emotion'
import theme from '../../styles/constants'
import fishingIcon from '../../assets/icons/homeaft/fishing-man.png'
import dolphinIcon from '../../assets/icons/homeaft/icons8-dolphin-100.png'
import trekkingIcon from '../../assets/icons/homeaft/icons8-trekking-100.png'
import sailIcon from '../../assets/icons/homeaft/Sailing-Yacht-icon.png'
import Button from '../button/ButtonWhite'

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled('div')`
  position: relative;
  margin-top: 125px;
`
const SubTitle = styled('div')`
  position: relative;
  margin-top: 16px;
`

const PinkTitle = styled('span')`
  color: ${theme.colors.primary};
`

const Row = styled('div')`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 50px;
  width: 660px;
`
const Column = styled('div')`
  flex-direction: column;
  margin-left: 24px;
  margin-right: 24px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  }
`

const Icon = styled('img')`
  width: 61px;
`

const Headline = styled('div')`
  margin-top: 16px;
`

const ButtonWrapper = styled('div')`
  align-self: center;
  margin-top: 40px;
`

const Line = styled('div')`
  box-sizing: border-box;
  height: 2px;
  width: 768px;
  border: 1px solid ${theme.colors.grey};
  margin-top: 90px;
  align-self: center;
`

const HowAfterLogin = () => {
  return (
    <Container>
      <Title className="who">
        Have a specific <PinkTitle>Trip</PinkTitle> in mind?
      </Title>
      <SubTitle className="pick">Pick one of the Trip categories</SubTitle>
      <Row>
        <Column>
          <center>
            <Icon src={fishingIcon} />
          </center>
          <Headline className="headlinelogin">Relaxing</Headline>
        </Column>
        <Column>
          <center>
            <Icon src={dolphinIcon} />
          </center>
          <Headline className="headlinelogin">Relaxing</Headline>
        </Column>
        <Column>
          <center>
            <Icon src={trekkingIcon} />
          </center>
          <Headline className="headlinelogin">Relaxing</Headline>
        </Column>
        <Column>
          <center>
            <Icon src={sailIcon} />
          </center>
          <Headline className="headlinelogin">Relaxing</Headline>
        </Column>
      </Row>
      <SubTitle className="pick" style={{ marginTop: '40px' }}>
        Or just type explore all trips
      </SubTitle>
      <ButtonWrapper>
        <Button text="SEE ALL TRIPS" />
      </ButtonWrapper>
      <Line />
    </Container>
  )
}

export default HowAfterLogin
