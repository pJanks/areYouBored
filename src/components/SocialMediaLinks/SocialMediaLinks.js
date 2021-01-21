import gitHubIcon from '../../images/github_icon.png'
import twitterIcon from '../../images/twitter_icon.png'
import linkedInIcon from '../../images/linkedin_icon.png'
import { StyledIconWrapper, StyledIcon } from './SocialMediaLinksStyledCompents'

export const SocialMediaLinks = () => {
  return(
    <StyledIconWrapper>
      <a rel='noopener noreferrer' aria-label='my github profile' href='https://github.com/pJanks' target='_blank'><StyledIcon alt='Github icon' src={gitHubIcon} /></a>
      <a rel='noopener noreferrer' aria-label='my linkedin profile' href='https://linkedin.com/in/johnnykcassidy' target='_blank'><StyledIcon alt='Linkedin icon' src={linkedInIcon} /></a>
      <a rel='noopener noreferrer' aria-label='my twitter profile' href='https://twitter.com/pJanksio' target='_blank'><StyledIcon alt='Twitter icon' src={twitterIcon} /></a>
    </StyledIconWrapper>
  )
}