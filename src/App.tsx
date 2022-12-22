import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './components/Header'
import { LayoutContainer } from './global'

import './global.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutContainer>
          <Header />
          <Router />
        </LayoutContainer>
      </BrowserRouter>
    </>
  )
}

export default App
