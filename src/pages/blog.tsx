import React, { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'

import { graphQLClient } from './api/graphql'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import Grid from '../assets/Grid'
import Column from '../assets/Column'

import { Container } from '../styles/pages/Blog'

type Post = {
  uid: string
  createdAt: string
  image: string
  title: string
  resume: string
  slug: string
}

type BlogProps = {
  posts: Post[]
}

export default function Blog({ posts }: BlogProps): JSX.Element {
  const [visibility, setVisibility] = useState('grid')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedVisibility = localStorage.getItem('visibility')

      setVisibility(savedVisibility || 'grid')
    }
  }, [])

  function handleClickGrid() {
    localStorage.setItem('visibility', 'grid')
    setVisibility('grid')
  }
  function handleClickColumn() {
    localStorage.setItem('visibility', 'column')
    setVisibility('column')
  }

  return (
    <>
      <Head>
        <title>TH-Blog | Posts</title>
      </Head>

      <Header />

      <Container>
        <h1>Posts</h1>

        <div>
          <a onClick={handleClickGrid}>
            <Grid color={visibility === 'grid' ? '#0095B7' : '#EFEDEE'} />
          </a>
          <a onClick={handleClickColumn}>
            <Column color={visibility === 'column' ? '#0095B7' : '#EFEDEE'} />
          </a>
        </div>

        <section className={visibility}>
          {posts.map(post => (
            <div key={post.uid}>
              <img src={post.image} alt={post.slug} />
              <section>
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: post.title
                  }}
                />

                <p>Criado em {post.createdAt}</p>

                <article
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: post.resume
                  }}
                />

                <Link href={`/${post.slug}`}>
                  <a>Ler Mais</a>
                </Link>
              </section>
            </div>
          ))}
        </section>
      </Container>

      <Footer isIcon />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    query {
      posts {
        uid
        createdAt
        image
        title 
        resume 
        slug
      }
  }
  `

  const { data } = await graphQLClient.executeOperation({ query })
  const { posts } = data

  return {
    props: {
      posts
    },

    revalidate: 30 * 60 // 1 Hour
  }
}
