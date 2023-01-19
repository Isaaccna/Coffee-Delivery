import {MapPin, Timer, CurrencyDollar} from 'phosphor-react'
import { IconMapPinDiv, IconPaymentDiv, IconTimerDiv, InfoContainer, MainWrapper, PageContainer, SectionWrapper } from './styles'

import DeliveryImg from '../../assets/deliveryIllustration.png'

import {FormData} from '../Checkout/index'
import {useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { paymentMethod } from '../Checkout/components/PaymentOptions'

interface LocationType {
  state: FormData
}



export function OrderConfirmed() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if(!state) return (
    <PageContainer>
      <h1>Desculpe! Não há pedido confirmado</h1>
      <img src={DeliveryImg} alt="" />
    </PageContainer>
  )
  return (
    <PageContainer>
      <main>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>


<MainWrapper>
        <InfoContainer>
          
          <SectionWrapper>
          <IconMapPinDiv>
            <MapPin size={16} weight="fill" color='white' />
          </IconMapPinDiv>
          <div>
          <p>Entrega em  
            <span> {state.street}, {state.number}, {state.complement? state.complement : ''} </span>
          </p>
          <p>{state.neighborhood} - {state.city} - {state.state}</p>
          </div>
         
          </SectionWrapper>
          
          <SectionWrapper>
          <IconTimerDiv>
            <Timer size={16} weight="fill" color='white' />
          </IconTimerDiv>
          <div>
          <p>Pagamento na entrega</p>
          <span> 20 min - 30 min </span>
          </div>
          </SectionWrapper>

          <SectionWrapper>
            <IconPaymentDiv>
              <CurrencyDollar size={16} weight="fill" color='white' />
            </IconPaymentDiv>
            <div>
              <p>Pagamento na entrega</p>
              <span>{paymentMethod[state.paymentMethod].label} </span>
            </div>
          </SectionWrapper>
        </InfoContainer>
        <div>

<img src={DeliveryImg} alt="" />

      </div>
      </MainWrapper>

      </main>
  
      
    </PageContainer>
  )
}
