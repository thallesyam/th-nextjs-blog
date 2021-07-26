import React from 'react'

import { Social } from '../Social/index'

import { Container } from './style'

type FooterProps = {
  isIcon?: boolean
}

export const Footer = ({ isIcon = false }: FooterProps): JSX.Element => {
  return (
    <Container>
      {isIcon && (
        <ul>
          <li>
            <Social
              IconComponent={'Linkedin'}
              link="https://www.linkedin.com/in/thalles-ian/"
              isTransparent
            />
          </li>
          <li>
            <Social
              IconComponent={'Github'}
              link="https://github.com/thallesyam"
              isTransparent
            />
          </li>
        </ul>
      )}

      <p>© All rights reserved Thalles ian @ 2020</p>
    </Container>
  )
}
