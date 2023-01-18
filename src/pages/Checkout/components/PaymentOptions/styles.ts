import styled from "styled-components";

export const PaymentOptionsContainer = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  input:checked + label div {
    background: var(--purple-light);
    border-color: var(--brand-purple);
  }

`

export const PaymentButtonContainer  = styled.div`

input {
    visibility: hidden;
    appearance: none;
  }
`
export const PaymentButton = styled.div`
background: var(--base-button);
color: var(--base-text);
display: flex;
gap: 0.75rem;
align-items: center;
width: 178.67px;
padding: 1rem;
font-size: 0.75rem;
border: 1px solid var(--base-button);
border-radius: 6px;
text-transform: uppercase;

svg {
  color: var(--brand-purple);
  font-weight: bold;
}

&:hover {
background: var(--base-hover);
}
`