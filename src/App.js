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
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://www.boredapi.com/api/activity')
    // fetch('http://www.boredapi.com/api/activity?key=3621244')
      .then(response => response.json())
      .then(json => setActivity(json))
      .catch(err => setError(err))
  }, [error])

  return (
    <div>
      <Header isViewFavoritesActive={isViewFavoritesActive} setIsViewFavoritesActive={setIsViewFavoritesActive} setIsAboutInfoActive={setIsAboutInfoActive} />
      {error ? (
        <StyledErrorMessage>There was an error: {error}</StyledErrorMessage>
      ) : (
        <ActivityCard currentActivity={activity} setActivity={setActivity} isAboutInfoActive={isAboutInfoActive} setIsAboutInfoActive={setIsAboutInfoActive} isViewFavoritesActive={isViewFavoritesActive} setIsViewFavoritesActive={setIsViewFavoritesActive} />
      )}
    </div>
  )
}

export default App
