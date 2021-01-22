import styled from 'styled-components'

export const StyledIcon = styled.img`
  border-radius: 100px;
  box-shadow: 0 2px 10px 0 #FFF;
  height: 40px;
  width: 40px;

  &:hover {
    box-shadow: 0 8px 20px 0 #FFF;
    height: 45px;
    width: 45px;
  }
`

export const StyledIconWrapper = styled.div`
  display: flex;
  height: 45px;
  justify-content: space-between;
  width: 25%;
`