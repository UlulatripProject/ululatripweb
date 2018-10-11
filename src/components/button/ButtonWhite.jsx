import React from 'react'
import styled from 'react-emotion'
import theme from '../../styles/constants'

const White = styled('button')`
  height: 40px;
  width: 290px;
  border: 2px solid #fd7575;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  color: ${theme.colors.pink};
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  background-color: ${theme.colors.white};

  &:hover {
    color: ${theme.colors.white};
    background: linear-gradient(45deg, #f36d7c 0%, #fe7676 100%);
    text-decoration: underline;
  }
`

const ButtonWhite = ({ text, onClick }) => <White onClick={onClick}>{text}</White>

ButtonWhite.defaultProps = {
  text: 'LEARN MORE',
}

export default ButtonWhite
