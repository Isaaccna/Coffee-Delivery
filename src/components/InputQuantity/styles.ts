import styled from "styled-components";

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