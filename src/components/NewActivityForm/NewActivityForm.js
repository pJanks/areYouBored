import { useState } from 'react'
import { StyledForm, StyledError, StyledDropdown, StyledButton } from './NewActivityFormStyledComponents'

export const NewActivityForm = ({ setActivity, currentActivity, setIsFavorite }) => {
  const [selectedActivityType, setSelectedActivityType] = useState('')
  const [error, setError] = useState('')

  const handleRandomActivityButtonClick = (e) => {
    e.preventDefault()
    fetch('http://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => {
        setError('')
        setActivity(json)
        checkIfFavorited(json)
      })
      .catch(err => setError(`There was an error: ${err}`))
  }
  
  const handleFreeRandomActivityButtonClick = (e) => {
    e.preventDefault()
    fetch('http://www.boredapi.com/api/activity?price=0.0')
      .then(response => response.json())
      .then(json => {
        setError('')
        setActivity(json)
        checkIfFavorited(json)
      })
      .catch(err => setError(`There was an error: ${err}`))
  }
  
  const handleFilterByTypeButtonClick = (e) => {
    e.preventDefault()
    selectedActivityType ? (
      fetch(`http://www.boredapi.com/api/activity?type=${selectedActivityType}`)
      .then(response => response.json())
      .then(json => {
        setError('')
        setActivity(json)
        checkIfFavorited(json)
      })
      .catch(err => setError(`There was an error: ${err}`))
    ) : setError('You must select an activity type first!')
  }

  const handleSelectValueChange = (e) => {
    setSelectedActivityType(e.target.value)
  }

  const checkIfFavorited = (activity) => {
    const foundItem = JSON.parse(localStorage.getItem(activity.key))
    if (foundItem) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }

  return(
    <StyledForm>
      <label htmlFor='activity-type'></label>
      <StyledError>{error}</StyledError>
      <StyledDropdown
        id='activity-type'
        defaultValue='Select Activity Type'
        onChange={(e) => handleSelectValueChange(e)}
        name='activity-type'>
          <option value="Select Activity Type" disabled hidden>Select Activity Type</option>
          <option value='busywork'>Busywork</option>
          <option value='charity'>Charity</option>
          <option value='cooking'>Cooking</option>
          <option value='diy'>DIY</option>
          <option value='education'>Education</option>
          <option value='music'>Music</option>
          <option value='recreational'>Recreational</option>
          <option value='relaxation'>Relaxation</option>
          <option value='social'>Social</option>
      </StyledDropdown>
      <StyledButton type='button' onClick={(e) => handleFilterByTypeButtonClick(e)}>Get Random Activity by Type</StyledButton>
      <StyledButton type='button' onClick={(e) => handleRandomActivityButtonClick(e)}>Get Random Activity</StyledButton>
      <StyledButton type='submit' onClick={(e) => handleFreeRandomActivityButtonClick(e)}>Get Random Free Activity</StyledButton>
    </StyledForm>
  )
}