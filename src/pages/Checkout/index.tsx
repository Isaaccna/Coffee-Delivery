import { MapPin, CurrencyDollarSimple} from 'phosphor-react' 
import { CardListContainer, FormContainer, FormIntro,FormPaymentIntro,PageContainer } from './styles'

import { CartContext, CartItem } from '../../contexts/CartContext'
import { useContext } from 'react'
import { CoffeeCart } from './components/CoffeeCart'
import { ConfirmOrderSection } from './components/ConfirmOrderSection'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { AddressForm } from './components/AddressForm'
import { PaymentOptions } from './components/PaymentOptions'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods{
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
}

const formValidationSchema = zod.object({
  zipcode: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(2, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type FormData = zod.infer<typeof formValidationSchema>

type ConfirmOrderFormData = FormData

export function Checkout() {
  const {cartItems, clearCartItems} = useContext(CartContext)

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(formValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
  
    navigate('/orderconfirmed' , {
      state: data,
    })
    console.log(data);
    clearCartItems();
    
    
  }
  
  return (
    <FormProvider {...confirmOrderForm}>
  <PageContainer
  onSubmit={handleSubmit(handleConfirmOrder)}
  >
<main>

  <h2>Complete seu pedido</h2>

  
    <FormContainer>
    <FormIntro>
   <MapPin color='#c47f17' weight='bold' size={22} />
   <div>
   <h3>Endereço de Entrega</h3>
   <p>Informe o endereço onde deseja receber seu pedido</p>
   </div>
    </FormIntro>
<AddressForm />
   </FormContainer>

   <FormContainer>
  <FormPaymentIntro>
    <CurrencyDollarSimple color='#8047F8' weight='bold' size={22} />
    <div>
      
      <h3>Pagamento</h3>
      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
    </div>
  </FormPaymentIntro>
<PaymentOptions />
  
   </FormContainer>
   

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
  </FormProvider>
  )
}
    