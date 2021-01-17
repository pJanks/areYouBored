import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks'
import { StyledHeaderText, StyledLogo, StyledHeader } from './HeaderStyledComponents'

export const Header = ({ setIsAboutInfoActive }) => {
  const handleLogoClick = () => {
    setIsAboutInfoActive(true)
  }

  return(
    <StyledHeader>
      <StyledLogo tabIndex='0' onClick={handleLogoClick}>About</StyledLogo> 
      <StyledHeaderText>Are you Bored?!</StyledHeaderText>
      <SocialMediaLinks />
    </StyledHeader>
  )
}