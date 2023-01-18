import styled from "styled-components";

export const PageContainer = styled.div`
display: flex;


h1 {
font-size: 2rem;
font-family: 'Baloo 2', cursive;
font-weight: 800;
color: var(--yellow-dark);
margin-top: 7rem;
}

main > p {
  font-size: 1.25rem;
  color : var(--base-subtitle);
  margin-bottom: 2.5rem;
}
`

export const MainWrapper = styled.div`

display: flex;
align-items: center;
gap: 6.365rem;
`

export const InfoContainer = styled.div`
width: 32.875rem;
display: flex;
flex-direction: column;
padding: 2.5rem;
gap: 2rem;

border: 1px solid var(--brand-yellow);
border-radius: 6px 36px 6px 36px;

`

export const SectionWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  p {
    color: var(--base-text);
  }
  span {
    font-weight: bold;
    font-family: Roboto, 'sans-serif';
    color: var(--base-text);
  }
`
export const IconDiv = styled.div`
padding: 0.5rem;
border-radius:1000px; 

`
export const IconMapPinDiv = styled(IconDiv)`
background-color : var(--brand-purple);
`

export const IconTimerDiv = styled(IconDiv)`
background-color : var(--brand-yellow);
`

export const IconPaymentDiv = styled(IconDiv)`
background-color : var(--yellow-dark);
`
