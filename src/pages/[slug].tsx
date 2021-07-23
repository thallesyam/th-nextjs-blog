import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import Head from 'next/head'
// import Link from 'next/link'

import { graphQLClient } from './api/graphql'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/Post'

type Post = {
  uid: string
  createdAt: string
  image: string
  title: string
  content: string
  slug: string
}

type BlogProps = {
  post: Post
}

export default function Post({ post }: BlogProps): JSX.Element {
  const titleFormated = post.title.split('<h1>')[1].split('</h1>')[0]

  console.log(post)

  return (
    <>
      <Head>
        <title>TH-Blog | {titleFormated}</title>
      </Head>

      <Header />

      <Container>
        <section>
          <img src={post.image} alt={titleFormated} />
          <h1>{titleFormated}</h1>
        </section>

        <div>
          <p className="spaceParagraph">Postado em {post.createdAt}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          />
        </div>
      </Container>

      <Footer isIcon />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
    query {
      posts {
        uid
        slug
      }
  }
  `

  const { data } = await graphQLClient.executeOperation({ query })
  const { posts } = data

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const query = `
    query{
      post(uid: "${slug}"){
        uid
        image
        title
        content
        createdAt
      }
    }
  `

  const { data } = await graphQLClient.executeOperation({ query })
  const { post } = data

  return {
    props: {
      post: post[0]
    },

    revalidate: 30 * 60 // 1 Hour
  }
}
