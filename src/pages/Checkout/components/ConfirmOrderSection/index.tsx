import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { ConfirmOrderButton, DetailsContainer, TemplateContainer, TotalFinalSection } from "./styles";



export function ConfirmOrderSection () {
  const deliveryFee = 3.50
  const {cartItemsTotal, cartQuantity} = useContext(CartContext);

  const cartItemsTotalFormatted = cartItemsTotal.toFixed(2)
  const deliveryFeeFormatted = deliveryFee.toFixed(2)

  const totalPrice = Number(cartItemsTotalFormatted) + Number(deliveryFeeFormatted);

  const totalPriceFormatted = totalPrice.toFixed(2);
  return (
<TemplateContainer>
  <DetailsContainer>
    <p>Total de itens</p>
    <h3>R$ {cartItemsTotalFormatted}</h3>
  </DetailsContainer>
  <DetailsContainer> 
    <p>Entrega</p>
    <h3>R$ {deliveryFeeFormatted}</h3>
    </DetailsContainer>
  <TotalFinalSection>
  <h3>Total</h3>
    <h3>R$ {totalPriceFormatted}</h3>
  </TotalFinalSection>

  <ConfirmOrderButton type="submit">CONFIRMAR PEDIDO</ConfirmOrderButton>
</TemplateContainer>

  )

}