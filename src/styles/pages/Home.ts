import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--whiteText);

    line-height: 84px;

    margin-bottom: 1.5rem;

    span {
      color: var(--primary);
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 100;
    font-style: normal;
    color: var(--whiteText);

    filter: brightness(0.8);

    letter-spacing: 2px;

    margin-bottom: 1.5rem;
  }

  ul {
    display: flex;
    align-items: center;

    gap: 1rem;
  }
`
