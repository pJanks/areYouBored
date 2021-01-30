import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks'
import { StyledHeaderText, StyledLinksWrapper, StyledNavButton, StyledHeader } from './HeaderStyledComponents'

export const Header = ({ isViewFavoritesActive, setIsViewFavoritesActive, setIsAboutInfoActive }) => {
  const handleLogoClick = () => {
    setIsAboutInfoActive(true)
  }

  const handleFavoritesButtonClick = () => {
    setIsViewFavoritesActive(true)
  }

  const handleHomeButtonClick = () => {
    window.location.reload()
  }

  return(
    <StyledHeader>
      <StyledLinksWrapper>
      <StyledNavButton tabIndex='0' onClick={handleLogoClick}>About</StyledNavButton>
      {isViewFavoritesActive ? <StyledNavButton tabIndex='0' onClick={handleHomeButtonClick}>Home</StyledNavButton> : <StyledNavButton tabIndex='0' onClick={handleFavoritesButtonClick}>Favorites</StyledNavButton>} 
      </StyledLinksWrapper>
      <StyledHeaderText>Are you Bored?!</StyledHeaderText>
      <SocialMediaLinks />
    </StyledHeader>
  )
}