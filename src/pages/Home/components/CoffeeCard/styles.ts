import styled from 'styled-components'

export const CardContainer = styled.div`
  background: var(--base-card);
  border-radius: 6px 36px;
  width: 256px;
  margin-top: 3.5rem;
  text-align: center;
  padding: 0 1.5rem 1.25rem 1.5rem;

  img {
    position: relative;
    top: -20px;
    margin-inline: auto;
  }
`

export const FeatureList = styled.div`
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  span {
    background: var(--yellow-light);
    color: var(--yellow-dark);
    border-radius: 100px;
    padding: 0.25rem;
    font-size: 0.625rem;
    font-weight: 700;
    margin: 0.25rem;
  }
`

export const CoffeeTitles = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--base-subtitle);
`
export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  color: var(--base-label);
  line-height: 18.2px;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
 
  p {
    font-size: 0.875rem;
  }

  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    margin-left: 0.25rem;
    margin-right:1.5rem;
  }
`

export const InputQuantityContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  padding: 0.2rem;
  display: flex;
  background: var(--base-button);
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    text-align: right;
    line-height: 20.8px;
    color: var(--base-title);
    background: none;
    border: none;
    &:focus {
      outline: none;
    }
  }

  button {
    width: 0.875rem;
    height: 0.875rem;
    font-size: 0.875rem;
    color: var(--brand-purple);
    font-weight: bold;
    background: none;
    border: none; 
    $:disabled {
      opacity: 0.6;
    }

    &:not(:disabled):hover {
      color: var(--purple-dark);
    }
  }
`

export const CartButton = styled.button`
  background: var(--purple-dark);
  color: white;

  border-radius: 6px;
  padding: 0.5rem;
  margin-left: 0.5rem;
`
