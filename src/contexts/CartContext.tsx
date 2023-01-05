import {createContext, ReactNode, useState, useReducer, useEffect} from'react'
import {produce} from 'immer'
import { Coffee } from '../pages/Home/components/CoffeeCard';
import { TotalPerItem } from '../pages/Checkout/components/CoffeeCart/styles';

export interface CartItem extends Coffee {
  quantity: number;
  }

interface CartContextType {
  cartItems: CartItem[]
   addCoffeeToCart: (coffee : CartItem) => void
   changeCartItemsQuantity: (cartItemId: string, type: 'increase' | 'decrease') => void,
   removeCartItem: (cartItemId: string) => void,
   cartQuantity: number,
   cartItemsTotal: number

}


export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
const [cartItems, setCartItems] = useState<CartItem[]>(() => {

const storedCartItems = localStorage.getItem('COFFEE-CART-1.0')

if (storedCartItems) {
  return JSON.parse(storedCartItems)
}
return []
}
)



function addCoffeeToCart(coffee: CartItem) {
  const alreadyInCart = cartItems.findIndex(
    (cartItems) => cartItems.id === coffee.id,
  )

  const newCart = produce(cartItems, (draft) => {
    if (alreadyInCart < 0) {
      draft.push(coffee)
    } else {
      draft[alreadyInCart].quantity += coffee.quantity
    }
  })

  setCartItems(newCart)
}

 

function changeCartItemsQuantity(
  cartItemId: string,
  type: 'increase' | 'decrease',
) {
  const newCart = produce(cartItems, (draft) => {
    const coffeeExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === cartItemId,
    )
    if (coffeeExistsInCart >= 0) {
      const item = draft[coffeeExistsInCart]
      draft[coffeeExistsInCart].quantity =
        type === 'increase' ? item.quantity + 1 : item.quantity - 1
    }
  })

  setCartItems(newCart)
}

function removeCartItem(cartItemId: string) {
  const newCart = produce(cartItems, (draft) => {
    const coffeeExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === cartItemId,
    )

    if (coffeeExistsInCart >= 0) {
      draft.splice(coffeeExistsInCart, 1)
    }
  })

  setCartItems(newCart)
}

const cartQuantity = cartItems.length
const cartItemsTotal = cartItems.reduce((total, cartItem) => {
  return total + cartItem.price * cartItem.quantity
}, 0)

useEffect(()=> {
  localStorage.setItem('COFFEE-CART-1.0', JSON.stringify(cartItems))
}, [cartItems])

return (
  <CartContext.Provider value={{
    cartItems,
    addCoffeeToCart,
    changeCartItemsQuantity,
    removeCartItem,
    cartQuantity,
    cartItemsTotal
  } }>
    {children}
  </CartContext.Provider>
)

}