import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from './components/Header/Header'
import './App.css'

const StyledAppWrapper = styled.div`
  color: blue;
  font-size: 300%;
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
    </StyledAppWrapper>
  )
}

export default App
