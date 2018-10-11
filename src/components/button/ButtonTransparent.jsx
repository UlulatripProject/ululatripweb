import React from 'react'
import styled from 'react-emotion'
import theme from '../../styles/constants'

const TransButton = styled('button')`
  height: 44px;
  width: 132px;
  border-radius: 5px;
  border: 2px solid ${theme.colors.transparent};
  color: ${theme.colors.transparent};
  background: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  font-family: 'SF Pro Display';
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`
const ButtonTransparent = ({ text, onClick }) => <TransButton onClick={onClick}>{text}</TransButton>

ButtonTransparent.defaultProps = {
  text: 'SIGN UP',
}

export default ButtonTransparent
