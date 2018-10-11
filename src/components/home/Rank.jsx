import React from 'react'
import styled from 'react-emotion'
import cliff from '../../assets/images/cliff.png'
import theme from '../../styles/constants'
import tripper from '../../assets/icons/homebef/tripper.png'

const Container = styled('div')`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 50px;
`
const BackgroundImage = styled('img')`
  position: absolute;
  width: 100%;
`

const BigTitle = styled('div')`
  z-index: 10;
  margin-top: 50px;
`
const Line = styled('div')`
  box-sizing: border-box;
  height: 2px;
  width: 382.5px;
  border: 1px solid ${theme.colors.grey};
  align-self: center;
  z-index: 10;
  opacity: 0.3;
  margin-top: 18px;
  margin-bottom: 66px;
`
const Row = styled('div')`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-self: center;
  z-index: 10;
`
const Number = styled('div')`
  position: relative;
  align-self: center;
  margin-right: 16px;
`
const Circle = styled('div')`
  background-color: ${theme.colors.white};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  z-index: 10;
  text-align: center;
`
const ImageIcon = styled('img')`
  overflow: hidden;
  border-radius: 100px;
  width: 100%;
`
const Column = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Name = styled('div')`
  margin-left: 24px;
`
const Role = styled('div')`
  margin-left: 24px;
`
const Space = styled('div')`
  box-sizing: border-box;
  height: 40px;
`

const Link = styled('div')`
  margin-top: 40px;
  cursor: pointer;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
  z-index: 10;
`

const Rank = () => {
  return (
    <Container>
      <BigTitle className="bigtitle">Trip Host Rank</BigTitle>
      <BackgroundImage src={cliff} />
      <Line />
      <Row>
        <Number className="num">1.</Number>
        <Circle>
          <ImageIcon src={tripper} />
        </Circle>
        <Column>
          <Name className="namewhite">Deandra Fihanna Marissi</Name>
          <Role className="role">Founder of Ululatrip</Role>
        </Column>
      </Row>
      <Space />
      <Row>
        <Number className="num">2</Number>
        <Circle>
          <ImageIcon src={tripper} />
        </Circle>
        <Column>
          <Name className="namewhite">Deandra Fihanna Marissi</Name>
          <Role className="role">Founder of Ululatrip</Role>
        </Column>
      </Row>
      <Space />
      <Row>
        <Number className="num">3</Number>
        <Circle>
          <ImageIcon src={tripper} />
        </Circle>
        <Column>
          <Name className="namewhite">Deandra Fihanna Marissi</Name>
          <Role className="role">Founder of Ululatrip</Role>
        </Column>
      </Row>
      <Link className="linkwhite">SHOW ALL ></Link>
    </Container>
  )
}

export default Rank
