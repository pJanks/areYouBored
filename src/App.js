import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from './components/Header/Header'
import { ActivityCard } from './components/ActivityCard/ActivityCard'
import './App.css'

const StyledAppWrapper = styled.div`
`


const App =  () => {
  const [activity, setActivity] = useState({})
  
  useEffect(() => {
    fetch('http://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
  }, [])

  return (
    <StyledAppWrapper>
      <Header />
      <ActivityCard currentActivity={activity} setActivity={setActivity} />
    </StyledAppWrapper>
  )
}

export default App
