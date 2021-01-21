import styled from 'styled-components'

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`

export const StyledCard = styled.section`
  align-items: left;
  background-color: #FFF;
  border-radius: 20px;
  box-shadow: 0 4px 13px 0 #FFF;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  margin: 2%;
  padding: 12%;
  width: 88%;
`

export const StyledFavoriteIconWrapper = styled.div`
  background-color: #FFF;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const StyledFavoriteInactiveIcon = styled.img`
  background-color: #FFF;
  height: 50px;
  width: 50px;
`

export const StyledFavoriteActiveIcon = styled.img`
  background-color: #FFF;
  height: 50px;
  width: 50px;
`

export const StyledNoFavoritesMessage = styled.h1`
  color: red;
  font-size: 500%;
  padding: 100px;
  text-align: center;
  width: 100%;
`

export const StyledActivityHeader = styled.h4`
  background: none;
  font-size: 130%;
  margin: 2% 0 2% 0;
`

export const StyledActivityInfo = styled.h3`
  background: none;
  font-weight: 400;
  margin: 1% 0 1% 0;
  text-transform: capitalize;
`

export const StyledLink = styled.a`
  background: none;
  color: #6666FF;
  font-weight: 700;
  margin: 2%;
`