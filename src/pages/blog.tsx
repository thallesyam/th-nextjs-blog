import React from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'

import { graphQLClient } from './api/graphql'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

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
  return (
    <>
      <Head>
        <title>TH-Blog | Posts</title>
      </Head>

      <Header />

      <Container>
        <h1>Posts</h1>

        <section>
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
