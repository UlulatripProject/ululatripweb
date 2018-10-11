import React, { Component } from 'react'
import styled from 'react-emotion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'
import Slideshows from './Sliders'
import theme from '../../styles/constants'
import cirmage from '../../assets/images/paus.jpg'
import Button from '../button/ButtonHover'

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const BigTitle = styled('div')`
  margin-top: 55px;
  margin-bottom: 20px;
`

const Row = styled('div')`
  flex-direction: row;
  display: flex;
  justify-content: center;
`

const Column = styled('div')`
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

const Sub = styled('div')`
  margin-top: 221px;
  margin-left: 20px;
`

const Head = styled('div')`
  margin-top: 5px;
  margin-left: 20px;
`

const Pin = styled('div')`
  margin-left: 20px;
  color: ${theme.colors.lightgrey};
`

const HoverContainer = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`
const Line = styled('div')`
  width: 90%;
  height: 2px;
  background-color: ${theme.colors.grey};
  margin-bottom: 20px;
  margin-top: 10px;
  box-sizing: border-box;
`
const ContentHover = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: row;
`
const CircleImage = styled('img')`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  margin-right: 10px;
`

const Name = styled('div')`
  margin-top: 8px;
`
const Sub2 = styled('div')`
  margin-top: 5px;
`
const ColHover = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const ButtonWrap = styled('div')`
  margin-bottom: 20px;
`

const Link = styled('div')`
  margin-top: 50px;
  cursor: pointer;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`

const AllHover = () => {
  return (
    <HoverContainer>
      <Line />
      <ContentHover>
        <CircleImage src={cirmage} />
        <ColHover>
          <Name className="name">Deandra Fihanna Marissi</Name>
          <Sub2 className="sub">Ululatrip Founder</Sub2>
        </ColHover>
      </ContentHover>
      <ButtonWrap>
        <Button />
      </ButtonWrap>
    </HoverContainer>
  )
}

class Popular extends Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.handleMouseHover2 = this.handleMouseHover2.bind(this)

    this.state = {
      isHovering: false,
      isHovering2: false,
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  handleMouseHover2() {
    this.setState(this.toggleHoverState2)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  toggleHoverState2(state) {
    return {
      isHovering2: !state.isHovering2,
    }
  }

  render() {
    return (
      <Container>
        <BigTitle className="bigtitlegrey"> Popular Trip</BigTitle>
        <Row>
          <Column
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <Slideshows />
            <Sub className="sub">Fish Watching</Sub>
            <Head className="head">Walk on The Water</Head>
            <Head className="dest">Sea World | Ancol</Head>
            <Pin className="pin" style={{ marginTop: '10px' }}>
              <FaMapMarkerAlt /> Jakarta
            </Pin>
            <Pin className="pin">
              <MdAccessTime /> 1 Day
            </Pin>
            <Pin
              className="pin"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              Rp200.0000 per orang
            </Pin>
            {this.state.isHovering && <AllHover />}
          </Column>
          <Column
            onMouseEnter={this.handleMouseHover2}
            onMouseLeave={this.handleMouseHover2}
          >
            <Slideshows />
            <Sub className="sub">Fish Watching</Sub>
            <Head className="head">Walk on The Water</Head>
            <Head className="dest">Sea World | Ancol</Head>
            <Pin className="pin" style={{ marginTop: '10px' }}>
              <FaMapMarkerAlt /> Jakarta
            </Pin>
            <Pin className="pin">
              <MdAccessTime /> 1 Day
            </Pin>
            <Pin
              className="pin"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              Rp200.0000 per orang
            </Pin>
            {this.state.isHovering2 && <AllHover />}
          </Column>
        </Row>
        <Link className="dest">SEE ALL TRIP ></Link>
      </Container>
    )
  }
}

export default Popular
