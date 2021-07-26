import React from 'react'
import Link from 'next/link'

import { Container } from './style'

import Linkedin from '../../assets/Linkedin.svg'
import Github from '../../assets/Github.svg'

type SocialProps = {
  IconComponent: string
  link: string
  isTransparent?: boolean
}

const component = {
  Linkedin,
  Github
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
