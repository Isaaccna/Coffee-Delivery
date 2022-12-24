import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import {
  CardContainer,
  CartButton,
  CoffeeDescription,
  CoffeeTitles,
  FeatureList,
  InputContainer,
  InputQuantityContainer
} from './styles'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'


export interface Coffee {
  id: string
  picture: string
  feature: string[]
  title: string
  description: string
  price: number
  quantity?: number
}
interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncreaseQuantity() {
    setQuantity(state => quantity + 1)
  }
  function handleDecreaseQuantity() {
    setQuantity(state => quantity - 1)
  }

  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart (coffeeToAdd)

    console.log(coffeeToAdd)
  }

  const priceDecimal = coffee.price.toFixed(2)
  return (
    <CardContainer>
      <img src={coffee.picture} alt="" />
      <FeatureList>
        {coffee.feature.map(taste => {
          const coffeeType = taste.toUpperCase()
          return <span key={coffeeType}>{coffeeType}</span>
        })}
      </FeatureList>
      <CoffeeTitles>{coffee.title}</CoffeeTitles>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <InputContainer>
        <p>
          R$<span>{priceDecimal}</span>
        </p>
        <InputQuantityContainer>
          <button disabled={quantity <= 1} onClick={handleDecreaseQuantity}>
            {' '}
            <Minus />{' '}
          </button>
          <input type="number" readOnly placeholder="1" value={quantity} />

          <button onClick={handleIncreaseQuantity}>
            <Plus />{' '}
          </button>
        </InputQuantityContainer>

        <CartButton onClick={handleAddCoffeeToCart}>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </InputContainer>
    </CardContainer>
  )
}
