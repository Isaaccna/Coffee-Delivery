import {createContext, ReactNode, useState} from'react'
import { Coffee} from '../pages/Home/components/CoffeeCard'


export interface CartItem  {
coffee:  Coffee;
quantity: number;
}

interface CartContextType {
  cartItems: CartItem[] | undefined;
  addCoffeeToCart: (coffee: Coffee, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
const [cartItems, setCartItems] = useState<CartItem[]>([])

function addCoffeeToCart (coffee: Coffee, quantity: number) {
 
  const hasProductIndex = cartItems.findIndex(
    (item) => item.coffee.id === coffee.id,
  )
  if (hasProductIndex < 0) {
  const newCoffee = [
    ...cartItems, {coffee, quantity}
  ]

  setCartItems(newCoffee)
}
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