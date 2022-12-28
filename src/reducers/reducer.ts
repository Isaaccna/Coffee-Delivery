

import { ActionTypes } from "./actions"




  interface CartItemsStates {
    cartItems: CartItem[];
  }

  export function cartItemsReducer(state: CartItemsStates, action: any) {

    switch (action.type) {
case ActionTypes.ADD_ITEM_TO_CART:

return produce (state, draft =>{
  draft.cartItems.push(action.payload.newCoffee);
})
    }
  }