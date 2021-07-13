import React from 'react'

import { Container } from '../styles/pages/Home'

import { Header } from '../components/Header'
import { Social } from '../components/Social'
import { Footer } from '../components/Footer'

export default function Home(): JSX.Element {
  return (
    <>
      <Header />

      <Container>
        <section>
          <h1>
            Olá! <br />
            Eu sou o <span>Thalles Ian.</span>
          </h1>

          <h2>Frontend Developer</h2>

          <ul>
            <li>
              <Social IconComponent={'Linkedin'} link="/" />
            </li>
            <li>
              <Social IconComponent={'Figma'} link="/" />
            </li>
            <li>
              <Social IconComponent={'Dribble'} link="/" />
            </li>
            <li>
              <Social IconComponent={'Behance'} link="/" />
            </li>
          </ul>
        </section>
      </Container>

      <Footer />
    </>
  )
}
