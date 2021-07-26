import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  .spaceParagraph {
    margin-bottom: 2rem;
    font-weight: 700;
  }

  > section {
    width: 100%;
    height: 15rem;

    margin-top: 7rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    img {
      position: relative;
      filter: brightness(0.8);

      width: 100%;
      height: 20rem;
      object-fit: cover;
    }

    h1 {
      position: absolute;

      color: var(--white);
      font-size: 2rem;
    }
  }

  > div {
    width: 100%;
    max-width: 61rem;
    background-color: var(--grayMedium);

    border-radius: 0.5rem;

    padding: 1rem 3rem 3rem;

    position: relative;
    top: -1rem;

    p {
      color: var(--background);
      line-height: 20px;
    }
  }
`
