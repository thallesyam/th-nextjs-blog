import React from 'react'
import Link from 'next/link'

import { Container } from './style'

import Linkedin from '../../assets/Linkedin.svg'
import Figma from '../../assets/Figma.svg'
import Dribble from '../../assets/Dribble.svg'
import Behance from '../../assets/Behance.svg'

type SocialProps = {
  IconComponent: string
  link: string
  isTransparent?: boolean
}

const component = {
  Linkedin,
  Figma,
  Dribble,
  Behance
}

export const Social = ({
  IconComponent,
  link,
  isTransparent = false
}: SocialProps): JSX.Element => {
  const Icon = component[IconComponent]

  return (
    <Container className={isTransparent && 'transparent'}>
      <Link href={link}>
        <a>
          <Icon />
        </a>
      </Link>
    </Container>
  )
}
