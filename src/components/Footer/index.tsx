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
            <Social IconComponent={'Linkedin'} link="/" isTransparent />
          </li>
          <li>
            <Social IconComponent={'Figma'} link="/" isTransparent />
          </li>
          <li>
            <Social IconComponent={'Dribble'} link="/" isTransparent />
          </li>
          <li>
            <Social IconComponent={'Behance'} link="/" isTransparent />
          </li>
        </ul>
      )}

      <p>© All rights reserved Thalles ian @ 2020</p>
    </Container>
  )
}
