import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Sucess } from './pages/Sucess'

export function Router() {
  return (
    <Routes>
<Route path='/' element={<Home />}/>
<Route path='/checkout' element={<Checkout />}/>
<Route path='/sucess' element={<Sucess />}/>
    </Routes>
  )
}