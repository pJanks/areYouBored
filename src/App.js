import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { ActivityCard } from './components/ActivityCard/ActivityCard'
import './App.css'

const App =  () => {
  const [activity, setActivity] = useState({})
  const [isAboutInfoActive, setIsAboutInfoActive] = useState(false)

  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header setIsAboutInfoActive={setIsAboutInfoActive} />
      <ActivityCard currentActivity={activity} setActivity={setActivity} isAboutInfoActive={isAboutInfoActive} setIsAboutInfoActive={setIsAboutInfoActive} />
    </div>
  )
}

export default App
