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

const StyledHeader = styled.header`
  align-items: center;
  border-bottom: 6px double #FFF;
  display: flex;
  height: 80px;
  padding: 1%;
  width: 100%;
`

const StyledLogo = styled.div`
  animation-name: ${LogoPalette};
  animation-duration: .8s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  border-radius: 13px;
  height: 55px;
  width: 55px;
`

const StyledHeaderText = styled.h1`
  color: #FFF;
  font-size: 100%;
  font-weight: 100;
  text-align: center;
  width: 100%;
`

export const Header = () => {
  return(
    <StyledHeader>
      <StyledLogo tabIndex='0' /> 
      <StyledHeaderText>Are you Bored?!</StyledHeaderText>
    </StyledHeader>
  )
}