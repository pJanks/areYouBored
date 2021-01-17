import styled, { keyframes } from 'styled-components'

const LogoPalette = keyframes`
  0% {
    background: red;
  }
  20% {
    background: orange;
  }
  40% {
    background: yellow;
  }
  60% {
    background: green;
  }
  80% {
    background: blue;
  }
  100% {
    background: violet;
  }
` 

export const StyledHeader = styled.header`
  align-items: center;
  border-bottom: 6px double #FFF;
  display: flex;
  height: 90px;
  padding: 2%;
  width: 100%;
`

export const StyledLogo = styled.button`
  align-items: center;
  animation-name: ${LogoPalette};
  animation-duration: .8s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  border: none;
  border-radius: 13px;
  display: flex;
  font-size: 100%;
  font-weight: bold;
  height: 65px;
  justify-content: center;
  width: 65px;
`

export const StyledHeaderText = styled.h1`
  background: none;
  color: #FFF;
  font-size: 330%;
  font-weight: 100;
  text-align: center;
  width: 100%;
`