import { useState } from 'react'
import { StyledForm, StyledLabel, StyledError, StyledDropdown, StyledOption, StyledButton } from './NewActivityFormStyledComponents'

export const NewActivityForm = ({ setActivity }) => {
  const [selectedActivityType, setSelectedActivityType] = useState('')
  const [error, setError] = useState('')

  const handleRandomActivityButtonClick = (e) => {
    e.preventDefault()
    fetch('http://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
  }
  
  const handleFreeRandomActivityButtonClick = (e) => {
    e.preventDefault()
    fetch('http://www.boredapi.com/api/activity?price=0.0')
      .then(response => response.json())
      .then(json => setActivity(json))
  }
  
  const handleFilterByTypeButtonClick = (e) => {
    e.preventDefault()
    selectedActivityType ? (
      fetch(`http://www.boredapi.com/api/activity?type=${selectedActivityType}`)
      .then(response => response.json())
      .then(json => {
          setError('')
          setActivity(json)
        })
    ) : setError('You must select an activity type first!')
  }

  const handleSelectValueChange = (e) => {
    setSelectedActivityType(e.target.value)
  }

  return(
    <StyledForm>
      <StyledLabel htmlFor='activity-type'></StyledLabel>
      <StyledError>{error}</StyledError>
      <StyledDropdown
        id='activity-type'
        defaultValue='Select Activity Type'
        onChange={(e) => handleSelectValueChange(e)}
        name='activity-type'>
        <StyledOption value="Select Activity Type" disabled hidden>Select Activity Type</StyledOption>
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
      <StyledButton type='button' onClick={(e) => handleFilterByTypeButtonClick(e)}>Get Random Activity by Type</StyledButton>
      <StyledButton type='button' onClick={(e) => handleRandomActivityButtonClick(e)}>Get Random Activity</StyledButton>
      <StyledButton type='submit' onClick={(e) => handleFreeRandomActivityButtonClick(e)}>Get Random Free Activity</StyledButton>
    </StyledForm>
  )
}