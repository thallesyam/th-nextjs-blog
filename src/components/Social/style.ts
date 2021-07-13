import styled from 'styled-components'

export const Container = styled.section`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 50%;

  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;

  a {
    display: flex;
  }

  path {
    fill: var(--black);
  }

  &.transparent {
    background: transparent;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
