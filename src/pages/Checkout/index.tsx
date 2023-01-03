import { MapPin, CurrencyDollarSimple, CreditCard, Bank, Trash } from 'phosphor-react'
import { ButtonsCardContainer, CardListContainer, FormContainer, FormIntro, HalfSizeInput, InputBase, InputContainer, InputDiv, InputMiddleSize, ItemCardContainer, LargerSizeInput, PageContainer, PaymentButton, PaymentButtonContainer, RemoveButton, SmallSizeInput } from './styles'

import { CartContext, CartItem } from '../../contexts/CartContext'
import { useContext } from 'react'
import { InputQuantity } from '../../components/InputQuantity'

interface CartContextProps {
  coffee: CartItem
}

export function Checkout({coffee}: CartContextProps) {
 const {cartItems, changeCartItemsQuantity} = useContext(CartContext)

 function handleDecrease() {
  changeCartItemsQuantity(coffee.id, 'decrease')
}

function handleIncrease() {
  changeCartItemsQuantity(coffee.id, 'increase')
}
  return (
  <PageContainer>
<main>

  <h2>Complete seu pedido</h2>

  <form>
    <FormContainer>
    <FormIntro>
   <MapPin color='#c47f17' weight='bold' size={22} />
   <div>
   <h3>Endereço de Entrega</h3>
   <p>Informe o endereço onde deseja receber seu pedido</p>
   </div>
    </FormIntro>
   <InputDiv>
   <InputMiddleSize type="number" placeholder='CEP' id='zipcode'/>
   <InputBase type="text" placeholder='Rua' id='street'/>
<InputContainer>

   <InputMiddleSize type="number" placeholder='Número' id='number'/>
   <LargerSizeInput type="text" placeholder='Complemento' id='complement'/>
   </InputContainer>
   
   <InputContainer>
   <InputMiddleSize type="text" placeholder='Bairro' id='neighborhood'/>
   <HalfSizeInput type="text" placeholder='Cidade' id='city'/>
   <SmallSizeInput type="text" placeholder='UF' id='state' maxLength={2} minLength={2}/>
   </InputContainer>

   </InputDiv>
   </FormContainer>

   <FormContainer>
  <FormIntro>
    <CurrencyDollarSimple color='#8047F8' weight='bold' size={22} />
    <div>
      <h3>Pagamento</h3>
      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
    </div>
  </FormIntro>

  <PaymentButtonContainer>
    <PaymentButton type='button'> <CreditCard color='#8047F8' weight='bold'/> CARTÃO DE CRÉDITO</PaymentButton>
    <PaymentButton type='button'> <Bank color='#8047F8' weight='bold'/> CARTÃO DE DÉBITO</PaymentButton>
    <PaymentButton type='button'> <CreditCard color='#8047F8' weight='bold'/> DINHEIRO</PaymentButton>
  </PaymentButtonContainer>
   </FormContainer>
   
  </form>

</main>
<aside>
  <h2>Cafés selecionados</h2>

<CardListContainer>
 {cartItems?.map(coffee => {
  return (
    <ItemCardContainer key={coffee.id}>
      <img src={coffee.picture} />
      <div>
        <h3>{coffee.title}</h3>
        <ButtonsCardContainer>
          <InputQuantity 
          quantity={coffee.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease} />

          <RemoveButton>  <Trash color='#8047F8' weight='bold' size={16} /> REMOVER</RemoveButton>
        </ButtonsCardContainer>
      </div>
    </ItemCardContainer>
  )
 }) }


</CardListContainer>

  {/* 
  map cart items ?
   get: ok
   picture 
   title
   quantity
   price

create const total = quantity * price

 const totalItems = total + total 
  const deliveryFee 
const total total
  */}

</aside>
  </PageContainer>
  )
}
    