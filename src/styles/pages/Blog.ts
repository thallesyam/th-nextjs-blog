import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 62rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0 1rem;

  .grid {
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .column {
    grid-template-columns: 1fr;
  }

  h1 {
    margin-top: 5.625rem;

    font-size: 3.5rem;
    font-weight: 700;

    color: var(--whiteText);
  }

  > div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;

    width: 100%;

    a {
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  > section {
    min-height: 20rem;

    margin-top: 5rem;
    margin-bottom: 11rem;

    display: grid;
    gap: 1.25rem;

    > div {
      background: var(--grayMedium);
      border-radius: 1rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
        height: 224px;
        object-fit: cover;
        border-radius: 1rem 1rem 0 0;
      }

      section {
        padding: 0 1rem 1rem;

        .title {
          h1,
          h2,
          h3,
          h4,
          h5 {
            font-size: 2rem;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            color: var(--background);
          }
        }

        > p {
          margin-bottom: 0.5rem;

          color: var(--darkGreen);
        }

        .content {
          font-size: 2rem;
          margin: 1rem 0;

          > p {
            font-size: 0.8rem;
            font-weight: 400;
          }
        }

        > a {
          color: var(--primary);
          font-size: 1.125rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
`
