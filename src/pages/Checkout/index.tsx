import { MapPin, CurrencyDollarSimple, CreditCard, Bank} from 'phosphor-react' 
import { CardListContainer, FormContainer, FormIntro, HalfSizeInput, InputBase, InputContainer, InputDiv, InputMiddleSize, LargerSizeInput, PageContainer, PaymentButton, PaymentButtonContainer, SmallSizeInput } from './styles'

import { CartContext, CartItem } from '../../contexts/CartContext'
import { useContext } from 'react'
import { CoffeeCart } from './components/CoffeeCart'
import { ConfirmOrderSection } from './components/ConfirmOrderSection'


export function Checkout() {
const {cartItems} = useContext(CartContext)
  
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
<CoffeeCart key={coffee.id} coffee={coffee}/>

  )
 }) }

<ConfirmOrderSection />
</CardListContainer>


</aside>
  </PageContainer>
  )
}
    