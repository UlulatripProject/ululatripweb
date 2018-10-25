import React from 'react'
import styled from 'react-emotion'
import theme from '../../styles/constants'

const Pink = styled('button')`
  height: 44px;
  width: 327px;
  border-radius: 5px;
  background: linear-gradient(45deg, #f36d7c 0%, #fe7676 100%);
  box-shadow: 0 2px 4px 0 #4a4a4a;
  color: ${theme.colors.white};
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
    text-decoration: underline;
  }
`

const ButtonPink = ({ text, onClick }) => <Pink onClick={onClick}>{text}</Pink>

ButtonPink.defaultProps = {
  text: 'BE A TRIP HOST',
}

export default ButtonPink
