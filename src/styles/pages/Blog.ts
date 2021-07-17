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

    margin-top: 5rem;
    margin-bottom: 11rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem;

    > div {
      background: var(--grayMedium);
      border-radius: 1rem;
      img {
        width: 100%;
        height: 224px;
        object-fit: cover;
        margin-bottom: 1.37rem;
      }

      section {
        padding: 1rem;

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
            font-size: 1.125rem;
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
