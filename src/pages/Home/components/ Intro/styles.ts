import styled from 'styled-components' 
export const IntroDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.875rem;
  margin-bottom:6.75rem;

`

export const CoffeeIntroduction = styled.div`
flex:1;
  h1 {
    color: var(--base-titles);
    font-weight: 800;
    font-size: 3rem;
    line-height: 62.4px;
    font-family: 'Baloo 2', cursive;
  }

  p {
    font-size: 1.25rem;
    line-height: 26px;
    color: var(--base-subtitle);
    margin-top: 1rem;
  }
`

export const DescriptionsWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  margin-top: 3.75rem;
`

export const DuoDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  p {
    color: var(--base-text);
  }
`

export const ImgIcon = styled.img`
  padding: 0.5rem;
  border-radius: 1000px;
`

export const ImgCart = styled(ImgIcon)`
  background: var(--yellow-dark);
`
export const ImgTimer = styled(ImgIcon)`
  background: var(--brand-yellow);
`
export const ImgPackage = styled(ImgIcon)`
  background: var(--base-text);
`
export const ImgCoffee = styled(ImgIcon)`
  background: var(--brand-purple);
`

export const BackgroundImg = styled.div`

`
