import styled from 'styled-components'

const StyledForm = styled.form`
  color: #FFF;
  background-color: green;
`

const StyledButton = styled.button`
  color: #FFF;
  background-color: green;
`

const StyledDropdown = styled.select`
  color: #FFF;
  background-color: green;
`

const StyledOption = styled.option`
  color: #FFF;
  background-color: green;
`

const StyledLabel = styled.label`
  color: #FFF;
  background-color: green;
`

export const NewActivityForm = ({ setActivity }) => {

  const handleRandomActivityButtonClick = (e) => {
    e.preventDefault()
    fetch('http://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
  }
  
  const handleFreeRandomActivityButtonClick = (e) => {
    e.preventDefault()
  }
  
  const handleFilterByTypeButtonClick = (e) => {
    e.preventDefault()
  }

  return(
    <StyledForm>
      <StyledButton type='submit' onClick={(e) => handleRandomActivityButtonClick(e)}>Get Random Activity</StyledButton>
      <StyledButton type='submit' onClick={(e) => handleFreeRandomActivityButtonClick(e)}>Get Random Free Activity</StyledButton>
      <StyledLabel htmlFor='activity-type'>Select Activity Type</StyledLabel>
      <StyledDropdown id='activity-type' defaultValue='-- Select --' name='activity-type'>
        <StyledOption value="-- Select --" disabled hidden>-- Select --</StyledOption>
        <StyledOption value='busywork'>Busywork</StyledOption>
        <StyledOption value='charity'>Charity</StyledOption>
        <StyledOption value='cooking'>Cooking</StyledOption>
        <StyledOption value='diy'>DIY</StyledOption>
        <StyledOption value='education'>Education</StyledOption>
        <StyledOption value='music'>Music</StyledOption>
        <StyledOption value='recreational'>Recreational</StyledOption>
        <StyledOption value='relaxation'>Relaxation</StyledOption>
        <StyledOption value='social'>Social</StyledOption>
      </StyledDropdown>
      <StyledButton type='submit' onClick={(e) => handleFilterByTypeButtonClick(e)}>Get Random Activity by Type</StyledButton>
    </StyledForm>
  )
}