import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  max-width: 62rem;
  margin: 0 auto;

  min-height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem;

  .active {
    color: var(--primary);

    &::after {
      content: '';

      display: block;

      width: 100%;
      height: 2px;
      background-color: var(--primary);

      position: absolute;
      top: 1.5rem;
    }
  }

  > ul {
    display: flex;
    gap: 1.5rem;

    li {
      position: relative;

      a {
        color: var(--whiteText);
        font-size: 1.25rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`
