import styled from 'styled-components'

export const PageContainer = styled.form`
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

export const FormPaymentIntro = styled(FormIntro)`

margin-bottom:0;
`

export const CardListContainer = styled(FormContainer)`
display: flex;
flex-direction: column;
gap: 1.5rem;

width: 28rem;

`



