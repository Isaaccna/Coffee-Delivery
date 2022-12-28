import {createContext, ReactNode, useState, useReducer} from'react'
import {produce} from 'immer'
import { Coffee } from '../pages/Home/components/CoffeeCard';

export interface CartItem extends Coffee {
  quantity: number;
  }

interface CartContextType {
  cartItems: CartItem[] | undefined;
   addCoffeeToCart: (coffee : CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
const [cartItems, setCartItems] = useState<CartItem[]>([])


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

return (
  <CartContext.Provider value={{
    cartItems,
    addCoffeeToCart
  } }>
    {children}
  </CartContext.Provider>
)

}