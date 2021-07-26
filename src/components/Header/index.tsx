import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { headerData } from '../../data/HeaderData'

import Logo from '../../assets/Logo.svg'

import { Container } from './style'

export const Header = (): JSX.Element => {
  const { asPath } = useRouter()

  return (
    <Container>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <ul>
        {headerData.map(item => {
          return (
            <li key={item.id}>
              <Link href={item.link}>
                <a className={item.link === asPath ? 'active' : ''}>
                  {item.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
