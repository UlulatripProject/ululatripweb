import React from 'react'
import styled from 'react-emotion'
import theme from '../../styles/constants'

const Style = styled('button')`
  height: 44px;
  width: 290px;
  border-radius: 5px;
  background: linear-gradient(45deg, #f36d7c 0%, #fe7676 100%);
  color: ${theme.colors.white};
  font-family: 'SF Pro Display';
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
    text-decoration: underline;
    border: 1px solid ${theme.colors.primary};
  }
`

const ButtonHover = ({ text, onClick }) => (
  <Style onClick={onClick}>{text}</Style>
)

ButtonHover.defaultProps = {
  text: 'SEE THIS TRIP',
}
export default ButtonHover
