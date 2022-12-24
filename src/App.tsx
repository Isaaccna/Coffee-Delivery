import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './components/Header'
import { LayoutContainer } from './global'
import { CartContextProvider } from './contexts/CartContext'

import './global.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <LayoutContainer>
            <Header />
            <Router />
          </LayoutContainer>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
