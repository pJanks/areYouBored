import './App.css'
import styled from 'styled-components'
import { Header } from './components/Header/Header'

const StyledAppWrapper = styled.div`
  color: blue;
  font-size: 300%;
`

const App = () => {
  return (
    <StyledAppWrapper>
      <Header />
    </StyledAppWrapper>
  )
}

export default App
