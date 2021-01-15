import styled, { keyframes } from 'styled-components'

const LogoPalette = keyframes`
  0% {
    background: #ee6055;
  }
  25% {
    background: #60d394;
  }
  50% {
    background: #aaf683;
  }
  75% {
    background: #ffd97d;
  }
  100% {
    background: #ff9b85;
  }
` 

const StyledHeader = styled.header`
  align-items: center;
  border-bottom: 6px double #FFF;
  display: flex;
  height: 80px;
  padding: 2%;
  width: 100%;
`

const StyledLogo = styled.div`
  animation-name: ${LogoPalette};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  border-radius: 100%;
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
      <StyledLogo />
      <StyledHeaderText>Are you Bored?!</StyledHeaderText>
    </StyledHeader>
  )
}