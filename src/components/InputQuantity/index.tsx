import { useContext, useState } from "react";
import { InputQuantityContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";
import { CartContext } from "../../contexts/CartContext"; 
// import {quantity, handleDecreaseQuantity, handleIncreaseQuantity} from '../../pages/Home/components/CoffeeCard'

interface InputQuantityProps {
 quantity: number;
  onIncrease: () => void
  onDecrease: () => void
}

export function InputQuantity({
  quantity,
  onIncrease,
  onDecrease
} : InputQuantityProps) {


  return (
    <InputQuantityContainer>
          <button disabled={quantity <= 1} onClick={onDecrease}>
            {' '}
            <Minus />{' '}
          </button>
          <input type="number" readOnly placeholder="1" value={quantity} />

          <button onClick={onIncrease}>
            <Plus />{' '}
          </button>
        </InputQuantityContainer>
  )
}