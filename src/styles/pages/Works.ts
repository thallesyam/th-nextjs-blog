import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 62rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 5.625rem;

    font-size: 3.5rem;
    font-weight: 700;

    color: var(--whiteText);
  }

  > section {
    min-height: 20rem;

    width: 100%;

    margin-top: 5rem;
    margin-bottom: 11rem;
  }
`
