import { StyledButton, StyledParagraph, StyledOverlay } from './AboutInfoStyledComponents'

export const AboutInfo = ({ setIsAboutInfoActive }) => {
  const handleCloseButtonClick = () => {
    setIsAboutInfoActive(false)
  }

  return(
    <StyledOverlay>
      <StyledParagraph>
        Are you bored? This app can help you find something to do! You can either pick any random activity, a FREE random activity, or filter a random activity by type.
        <StyledButton onClick={handleCloseButtonClick}>
          Close
        </StyledButton>
      </StyledParagraph>
    </StyledOverlay>
  )
}