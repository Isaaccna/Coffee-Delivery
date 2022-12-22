import {ShoppingCart, Plus, Minus} from 'phosphor-react'

import { CardContainer, CartButton, CoffeeDescription, CoffeeTitles, FeatureList, InputContainer, InputQuantityContainer } from "./styles";
import {  useState } from 'react';

interface CoffeeProps {
  id: string;
  picture: string
  feature: string[]
  title: string
  description: string
  price: number
}

export function CoffeeCard({picture, feature, title, description, price}: CoffeeProps) {

  const [quantity, setQuantity] = useState(1);

  function handleIncreaseQuantity() {
    setQuantity((state) => quantity + 1)
  }
  function handleDecreaseQuantity() {
    setQuantity((state) => quantity - 1)
  }

  function handleAddItemToCart() {
    
  }

const priceDecimal = price.toFixed(2)
  return (
    
  <CardContainer>
    <img src={picture} alt="" />
    <FeatureList>
      {feature.map(taste =>{
          const coffeeType = taste.toUpperCase()
        return <span key={coffeeType}>{coffeeType}</span>
      })}
      
      </FeatureList>
    <CoffeeTitles>{title}</CoffeeTitles>
    <CoffeeDescription>{description}</CoffeeDescription>

    <InputContainer>
    <p>R$<span>{priceDecimal}</span></p>
    <InputQuantityContainer>
  <button disabled={quantity <=1} onClick={handleDecreaseQuantity}>  <Minus /> </button> 
    <input type="number" readOnly placeholder='1' value={quantity}   />

    <button onClick={handleIncreaseQuantity}><Plus /> </button>
     
    </InputQuantityContainer>
    
    <CartButton><ShoppingCart weight="fill" size={22} /></CartButton>
    </InputContainer>
    
  
  </CardContainer>

  )
  
}


