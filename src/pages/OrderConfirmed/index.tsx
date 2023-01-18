import {MapPin, Timer, CurrencyDollar} from 'phosphor-react'
import { IconMapPinDiv, IconPaymentDiv, IconTimerDiv, InfoContainer, MainWrapper, PageContainer, SectionWrapper } from './styles'

import DeliveryImg from '../../assets/deliveryIllustration.png'

export function OrderConfirmed() {
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
          <p>Address</p>
          <p>City - State</p>
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
              <span>Payment Method </span>
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
