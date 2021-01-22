import styled, { keyframes } from 'styled-components'

const HeaderTextPalette = keyframes`
  0% {
    color: red;
  }
  20% {
    color: orange;
  }
  40% {
    color: yellow;
  }
  60% {
    color: green;
  }
  80% {
    color: blue;
  }
  100% {
    color: violet;
  }
` 

export const StyledHeader = styled.header`
  align-items: center;
  border-bottom: 6px double #FFF;
  display: flex;
  height: 115px;
  padding: 2%;
  width: 100%;
`

export const StyledNavButton = styled.button`
  align-items: center;
  background-color: #FFF;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 #FFF;
  display: flex;
  font-size: 100%;
  font-weight: 700;
  height: 70px;
  justify-content: center;
  margin-right: 40px;
  width: 85px;

  &:hover{
    box-shadow: 0 8px 20px 0 #FFF;
    cursor: pointer;
  }
`

export const StyledLinksWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 300px;
`


export const StyledHeaderText = styled.h1`
  animation-name: ${HeaderTextPalette};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  background: none;
  color: #FFF;
  font-size: 330%;
  font-weight: 200;
  text-align: center;
  width: 100%;
`