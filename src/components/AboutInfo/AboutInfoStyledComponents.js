import styled from 'styled-components'

export const StyledOverlay = styled.div`
  align-items: center;
  background-color: #000;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0.9;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`

export const StyledParagraph = styled.p`
  align-items: center;
  background-color: #696969;
  border-radius: 30px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  font-size: 130%;
  font-weight: 700;
  margin: 10%;
  opacity: 10;
  padding: 6%;
`

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 115%;
  font-weight: 700;
  margin: 3%;
  text-decoration: underline;
  width: fit-content;

  &:hover {
    color: #FF0000;
    cursor: pointer;
  }
`