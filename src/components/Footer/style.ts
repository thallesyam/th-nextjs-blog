import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  max-width: 62rem;
  margin: 0 auto;

  min-height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  p {
    font-size: 1rem;
    font-weight: 300;
    color: var(--grayLight);
  }

  ul {
    display: flex;
    align-items: center;

    gap: 1rem;
    margin-bottom: 1rem;

    path {
      fill: var(--whiteText);
    }
  }
`
