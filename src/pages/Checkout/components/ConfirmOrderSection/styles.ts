import styled from 'styled-components'

export const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  color: var(--base-text);

  p {
    font-size: 0.875rem;
  }
  h3 {
    font-size: 1rem;
  }
`

export const TotalFinalSection = styled(DetailsContainer)`
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--base-subtitle);
  }
`

export const ConfirmOrderButton = styled.button`
  margin-top: 1.5rem;
  background-color: var(--brand-yellow);
  border-radius: 6px;
  padding: 0.75rem 0.5rem;

  color: white;
  font-size: 0.875rem;
  font-weight: bold;
`
