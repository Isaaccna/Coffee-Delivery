import { ItemCardContainer, ButtonsCardContainer, RemoveButton,  TitlePriceContainer, TotalPerItem } from "./styles"
import { Trash } from 'phosphor-react'

import  { InputQuantity } from "../../../../components/InputQuantity"
import { CartContext, CartItem } from "../../../../contexts/CartContext"
import { useContext } from "react";

interface CoffeeCardProps {
  coffee: CartItem
}

export function CoffeeCart({coffee} : CoffeeCardProps) {
  const {changeCartItemsQuantity, removeCartItem, cartItemsTotal, cartQuantity} = useContext(CartContext);

  function handleDecrease() {
   changeCartItemsQuantity(coffee.id, 'decrease')
 }
 
 function handleIncrease() {
   console.log(coffee.id);
   
   changeCartItemsQuantity(coffee.id, 'increase')
   
 }
 function handleRemovedItem () {
   removeCartItem(coffee.id)
 }

 const totalPricePerItem = coffee.quantity * coffee.price

 const totalPricePerItemFormatted = totalPricePerItem.toFixed(2)
  return (
    

    <ItemCardContainer>
      <img src={coffee.picture} />
      <div>
        <TitlePriceContainer>
          <h3>{coffee.title}</h3>
          <TotalPerItem>R${totalPricePerItemFormatted}</TotalPerItem>
        </TitlePriceContainer>
        
        <ButtonsCardContainer>
          <InputQuantity 
          quantity={coffee.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease} />

          <RemoveButton 
          onClick={handleRemovedItem}>  <Trash color='#8047F8' weight='bold' size={16} /> REMOVER</RemoveButton>
        </ButtonsCardContainer>
      </div>
     
    </ItemCardContainer>
   
  )
}