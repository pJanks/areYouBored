import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from './components/Header/Header'
import { ActivityCard } from './components/ActivityCard/ActivityCard'
import './App.css'

const App =  () => {
  const [activity, setActivity] = useState({})
  const [isAboutInfoActive, setIsAboutInfoActive] = useState(false)

  useEffect(() => {
    fetch('http://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
  }, [])

  return (
    <div>
      <Header setIsAboutInfoActive={setIsAboutInfoActive} />
      <ActivityCard currentActivity={activity} setActivity={setActivity} isAboutInfoActive={isAboutInfoActive} setIsAboutInfoActive={setIsAboutInfoActive} />
    </div>
  )
}

export default App
