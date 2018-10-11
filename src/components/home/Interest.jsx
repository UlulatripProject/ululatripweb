import React from 'react'
import styled from 'react-emotion'
import Button from '../button/ButtonWhite'

const Container = styled('div')`
  display: flex;
  height: 230px;
  width: 100%;
  background: linear-gradient(45deg, #f36d7c 0%, #f46d7c 5.29%, #fe7676 100%);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`

const Title = styled('div')`
  margin-bottom: 50px;
`

const Interest = () => {
  return (
    <Container>
      <Title className="interest">Interested in hosting Unique Trips?</Title>
      <Button text="BE A TRIP HOST" />
    </Container>
  )
}

export default Interest
