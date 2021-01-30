import styled from 'styled-components'

export const StyledIcon = styled.img`
  border-radius: 30px;
  box-shadow: 0 2px 10px 0 #FFF;
  height: 55px;
  width: 55px;

  &:hover {
    box-shadow: 0 8px 20px 0 #FFF;
    height: 60px;
    width: 60px;
  }
`

export const StyledIconsWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 45px;
  justify-content: space-between;
  width: 25%;
`

export const StyledIconWrapper = styled.div`
width: 100px;
`