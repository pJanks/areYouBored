import styled from 'styled-components'

export const StyledForm = styled.form`
  align-items: center;
  color: #000;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  text-align: center;
`

export const StyledError = styled.span`
  background-color: inherit;
  color: red;
  font-size: 130%;
  font-weight: 700;
  margin: 1%;
`

export const StyledButton = styled.button`
  align-items: center;
  background-color: #E8F9E3;
  border: none;
  border-radius: 13px;
  box-shadow: 0 4px 13px 0 #000;
  display: flex;
  font-size: 110%;
  font-weight: 700;
  height: 45px;
  justify-content: center;
  margin: 15px;
  padding: 13px;
  text-align: center;
  width: 40%;

  &:hover {
    box-shadow: 0 8px 26px 0 #000;
    font-size: 130%;
    height: 55px;
  }
`

export const StyledDropdown = styled.select`
  background-color: #E8F9E3;
  border-radius: 13px;
  box-shadow: 0 4px 13px 0 #000;
  font-size: 110%;
  font-weight: 700;
  height: 45px;
  margin: 15px;
  padding: 1%;
  width: 40%;

  &:hover {
    box-shadow: 0 8px 26px 0 #000;
    font-size: 120%;
    height: 55px;
  }
`