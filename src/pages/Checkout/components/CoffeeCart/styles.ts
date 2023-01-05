import styled from "styled-components";


export const ItemCardContainer = styled.div`
display: flex;
gap: 1.25rem;
align-items: center;
width: 23rem;
padding-bottom: 1.5rem;
border-bottom: 1px solid var(--base-button);
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

export const TitlePriceContainer = styled.div`
display: flex;
position: relative;
`
export const TotalPerItem = styled.h3 `
font-size: 1rem;
font-weight: bold;
position: absolute;
left: 13.8125rem;
`