import gitHubIcon from '../../images/github_icon.png'
import twitterIcon from '../../images/twitter_icon.png'
import linkedInIcon from '../../images/linkedin_icon.png'
import styled from 'styled-components'

const StyledIcon = styled.img`
  height: 30px;
  width: 30px;

  &:hover {
    height: 40px;
    width: 40px;
  }
`

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
`

export const SocialMediaLinks = () => {
  return(
    <StyledIconWrapper>
      <a rel='noopener noreferrer' aria-label='my github profile' href='https://github.com/pJanks' target='_blank'><StyledIcon alt='Github icon' src={gitHubIcon} className='social-icons'/></a>
      <a rel='noopener noreferrer' aria-label='my linkedin profile' href='https://linkedin.com/in/johnnykcassidy' target='_blank'><StyledIcon alt='Linkedin icon' src={linkedInIcon} className='social-icons'/></a>
      <a rel='noopener noreferrer' aria-label='my twitter profile' href='https://twitter.com/pJanksio' target='_blank'><StyledIcon alt='Twitter icon' src={twitterIcon} className='social-icons'/></a>
    </StyledIconWrapper>
  )
}