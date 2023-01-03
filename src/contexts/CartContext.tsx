import {createContext, ReactNode, useState, useReducer, useEffect} from'react'
import {produce} from 'immer'
import { Coffee } from '../pages/Home/components/CoffeeCard';

export interface CartItem extends Coffee {
  quantity: number;
  }

interface CartContextType {
  cartItems: CartItem[] | undefined;
   addCoffeeToCart: (coffee : CartItem) => void
   changeCartItemsQuantity: (coffeeId: string, type: 'increase' | 'decrease') => void
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
  coffeeId: string,
  type: 'increase' | 'decrease'
) {
  const newCart = produce(cartItems, (draft) => {
    const coffeeExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffeeId,
    )
    if (coffeeExistsInCart >= 0) {
      const item = draft[coffeeExistsInCart]
      draft[coffeeExistsInCart].quantity =
        type === 'increase' ? item.quantity + 1 : item.quantity - 1
    }
  })

  setCartItems(newCart)
}


useEffect(()=> {
  localStorage.setItem('COFFEE-CART-1.0', JSON.stringify(cartItems))
}, [cartItems])

return (
  <CartContext.Provider value={{
    cartItems,
    addCoffeeToCart,
    changeCartItemsQuantity
  } }>
    {children}
  </CartContext.Provider>
)

}