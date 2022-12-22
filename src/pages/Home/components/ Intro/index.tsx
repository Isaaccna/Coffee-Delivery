import CartIntro from '../../../../assets/cart-intro.png'
import TimerIntro from '../../../../assets/time-intro.png'
import PackageIntro  from '../../../../assets/package-intro.png'
import CoffeeIntro from '../../../../assets/coffee-intro.png'
import CupCoffee from '../../../../assets/cup-of-coffee.png'

import {IntroDiv, CoffeeIntroduction, DescriptionsWrapper, ImgCart, ImgTimer, ImgPackage, ImgCoffee, DescriptionContainer, DuoDescription, BackgroundImg} from './styles'
export function Intro () {
  return (
    <main>
      <IntroDiv>
        <CoffeeIntroduction>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>

          <DescriptionsWrapper>
            <DuoDescription>
            <DescriptionContainer>
              <ImgCart src={CartIntro} alt="cart-icon"  />
              <span>Compra simples e segura</span>
             </DescriptionContainer>
             <DescriptionContainer>
              <ImgTimer src={TimerIntro} alt="timer icon"  />
              <span>Entrega rápida e rastreada</span>
            </DescriptionContainer>
            </DuoDescription>
         <DuoDescription>

         <DescriptionContainer>
              <ImgPackage src={PackageIntro} alt="package icon"  />
              <span>Embalagem mantém o café intacto</span>
            </DescriptionContainer>
            <DescriptionContainer>
              <ImgCoffee src={CoffeeIntro} alt="coffee icon"  />
              <span>O café chega fresquinho até você</span>
            </DescriptionContainer> 

         </DuoDescription>
         
          </DescriptionsWrapper>
        
        </CoffeeIntroduction>

        <BackgroundImg>
        <img src={CupCoffee} alt=""  />
         
        </BackgroundImg>
        
      </IntroDiv>
    </main>
  )
}