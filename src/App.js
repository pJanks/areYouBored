import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { ActivityCard } from './components/ActivityCard/ActivityCard'
import './App.css'

const StyledErrorMessage = styled.span`
  background-color: inherit;
  color: red;
  font-size: 160%;
  font-weight: 700;
  margin: 60px;
`

const App =  () => {
  const [activity, setActivity] = useState({})
  const [isAboutInfoActive, setIsAboutInfoActive] = useState(false)
  const [isViewFavoritesActive, setIsViewFavoritesActive] = useState(false)
  const [appError, setAppError] = useState('')

  useEffect(() => {
    fetch('http://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
      .catch(err => setAppError(err))
  }, [appError])

  return (
    <div>
      <Header isViewFavoritesActive={isViewFavoritesActive} setIsViewFavoritesActive={setIsViewFavoritesActive} setIsAboutInfoActive={setIsAboutInfoActive} />
      {appError ? (
        <StyledErrorMessage>There was an error: {appError}</StyledErrorMessage>
      ) : (
        <ActivityCard appError={appError} currentActivity={activity} setActivity={setActivity} isAboutInfoActive={isAboutInfoActive} setIsAboutInfoActive={setIsAboutInfoActive} isViewFavoritesActive={isViewFavoritesActive} setIsViewFavoritesActive={setIsViewFavoritesActive} />
      )}
    </div>
  )
}

export default App
