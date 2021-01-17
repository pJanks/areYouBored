import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks'
import { StyledHeaderText, StyledLogo, StyledHeader } from './HeaderStyledComponents'

export const Header = () => {
  return(
    <StyledHeader>
      <StyledLogo tabIndex='0'>About</StyledLogo> 
      <StyledHeaderText>Are you Bored?!</StyledHeaderText>
      <SocialMediaLinks />
    </StyledHeader>
  )
}