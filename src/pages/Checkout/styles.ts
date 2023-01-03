import styled from 'styled-components'

export const PageContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 2rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--base-subtitle);

    margin-bottom: 1rem;
  }
`

export const FormContainer = styled.div`
  background-color: var(--base-card);
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;

  width: 40rem;
`

export const FormIntro = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  h3 {
    font-family: 'Roboto', sans-serif;
    color: var(--base-subtitle);
  }

  p {
    color: var(--base-text);
    font-size: 0.875rem;
  }
`
export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
`
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const InputBase = styled.input`
  border-radius: 4px;
  background-color: var(--base-input);
  color: var(--base-text);
  font-size: 0.875rem;
  padding: 0.75rem;
`

export const InputMiddleSize = styled(InputBase)`
  width: 200px;
`

export const LargerSizeInput = styled(InputBase)`
  flex: 2 1 0;
`

export const HalfSizeInput = styled(InputBase)`
  width: 276px;
`
export const SmallSizeInput = styled(InputBase)`
width: 60px
`
export const PaymentButtonContainer  = styled.div`
display: flex;
gap:0.750rem;
`
export const PaymentButton = styled.button`
display: flex;
gap:0.750rem;
background: var(--base-button);
padding: 1rem;
font-size: 0.75rem;
flex:1;
border-radius: 6px;

`
export const CardListContainer = styled(FormContainer)`
display: flex;
flex-direction: column;
gap: 3.5rem;
`

export const ItemCardContainer = styled.div`
display: flex;
gap: 1.25rem;
align-items: center;

h3 {
  font-size: 1rem;
  color: var(--base-subtitle);
}
img {
  width: 4rem;
}
`

export const ButtonsCardContainer = styled.div`
display: flex;
gap: 1rem;
margin-top: 0.5rem;

`

export const RemoveButton = styled.button`
display: flex;
  gap: 0.25rem;
  align-items: center;
  font-size: 0.75rem;

  background: var(--base-button);
  border-radius: 6px;
  padding-inline: 0.5rem;
`