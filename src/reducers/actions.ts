import { Coffee } from "../pages/Home/components/CoffeeCard";
import { CartItem } from "./reducer";
export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
}

export function addNewItemAction (newCoffee:CartItem) {
  return {
    
      type: 'ADD_ITEM_TO_CART',
      payload: {
        newCoffee
      }
    
  }
}