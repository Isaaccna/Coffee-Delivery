import Logo from '../../assets/Logo.svg'
import ShoppingCart from '../../assets/cart-icon.png'
import MapPin from '../../assets/map-pin.png'

import { NavLink } from 'react-router-dom'
import { CartContainer, CartLenght, HeaderContainer, LocationContainer } from './styles'
import { useState, useContext } from 'react'
import axios from 'axios'
import {CartContext} from '../../contexts/CartContext'


// AIzaSyCdad4nHxg8VGgF8KDjAb1mlTRkoBxNJuw

export function Header() {
const {cartQuantity} = useContext(CartContext)
  const [location, setLocation] = useState('')

  
  navigator.geolocation.getCurrentPosition(function (position) {
    
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    axios(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=97519a0401f442ca944d73472197f53e`)
    .then(response => {

       const address = response.data.results[0].formatted.split(',')
       
       const city = address[1]
       
       const statePlusZipCode = address[2].split(' ')
       
       const state =statePlusZipCode[1]
       
      setLocation(`${city}, ${state}`);
      
       
    })
    
  })

  

  return (
    <HeaderContainer>
      <NavLink to="/">
      <img src={Logo} alt="Logo" />
      </NavLink>

      <nav>
        <LocationContainer>
          <img src={MapPin} alt="map pin" />
          <span>{location ? location : 'Loading '}</span>
        </LocationContainer>
        <CartContainer>
          <NavLink to="/checkout">
            <img src={ShoppingCart} alt="cart" />
          </NavLink>
{cartQuantity > 0 ? <CartLenght> {cartQuantity} </CartLenght> : ''}
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
