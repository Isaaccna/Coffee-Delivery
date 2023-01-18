import styled from "styled-components";


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
