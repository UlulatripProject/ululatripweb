import React from 'react'
import styled from 'react-emotion'
import theme from '../../styles/constants'
import hostIcon from '../../assets/icons/homebef/host.png'
import tripperIcon from '../../assets/icons/homebef/tripper.png'
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
`

const Icon = styled('img')`
  width: 125px;
`

const MidText = styled('div')`
  height: 30px;
  width: 208px;
  margin-top: 98px;
  margin-left: 18px;
  margin-right: 18px;
`

const Headline = styled('div')`
  margin-top: 16px;
`

const Subline = styled('div')`
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

const How = () => {
  return (
    <Container>
      <Title className="who">
        Who Are <PinkTitle>You</PinkTitle> ?
      </Title>
      <Row>
        <Column>
          <center>
            <Icon src={hostIcon} />
          </center>
          <Headline className="headline">Trip Host</Headline>
          <Subline className="subline">
            Trip hosts are those who create the different kind of unique trips
            to offer.
          </Subline>
        </Column>
        <MidText className="or">Or</MidText>
        <Column>
          <center>
            <Icon src={tripperIcon} />
          </center>
          <Headline className="headline">Tripper</Headline>
          <Subline className="subline">
            Trippers are those who seek for unique trips & different trips of a
            lifetime.
          </Subline>
        </Column>
      </Row>
      <ButtonWrapper>
        <Button />
      </ButtonWrapper>
      <Line />
    </Container>
  )
}

export default How
