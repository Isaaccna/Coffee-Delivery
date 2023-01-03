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
import { useState, useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { InputQuantity } from '../../../../components/InputQuantity'

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

  function handleIncreaseQuantity() {
    setQuantity(state => quantity + 1)
  }
  function handleDecreaseQuantity() {
    setQuantity(state => quantity - 1)
  }
  const { addCoffeeToCart } = useContext(CartContext)



  function handleAddCoffeeToCart() {
    const newCoffee = {
      ...coffee,
      quantity
    }

    addCoffeeToCart(newCoffee)
    console.log(newCoffee)
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
   <InputQuantity 
   onIncrease={handleIncreaseQuantity}
   onDecrease={handleDecreaseQuantity}
   quantity={quantity} />

        <CartButton onClick={handleAddCoffeeToCart}>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </InputContainer>
    </CardContainer>
  )
}
