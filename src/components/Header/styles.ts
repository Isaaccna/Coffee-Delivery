import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
display: flex;
gap: 0.875rem;

  }

 div {
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.25rem;
}
`

export const LocationContainer = styled.div`
background-color: var(--purple-light);
border-radius: 6px;
padding:0.5rem;
color: var(--brand-purple);
`

export const CartContainer = styled.div`
background-color: var(--yellow-light);
padding: 0.5rem;
border-radius: 6px;
`
