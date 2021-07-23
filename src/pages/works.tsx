import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Gallery from 'react-grid-gallery'

import { graphQLClient } from './api/graphql'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/Works'

type WorkProps = {
  imageJob: string
  link: string
  thumbnailwidth: number
  thumbnailheight: number
}

type ImagesProps = {
  link: string
  src: string
  thumbnail: string
  thumbnailHeight: number
  thumbnailWidth: number
}

type HomeProps = {
  images: ImagesProps[]
}

export default function Home({ images }: HomeProps): JSX.Element {
  function handleClickOnImage(id: number) {
    const selectedImage = images[id]

    if (selectedImage.link) {
      window.open(selectedImage.link, '_blank')
    }
  }

  return (
    <>
      <Head>
        <title>TH-Blog | Trabalhos</title>
      </Head>

      <Header />

      <Container>
        <h1>Trabalhos</h1>

        <section>
          <Gallery
            images={images}
            enableImageSelection={false}
            backdropClosesModal={false}
            enableLightbox={false}
            margin={5}
            onClickThumbnail={(id: number) => handleClickOnImage(id)}
          />
        </section>
      </Container>

      <Footer isIcon />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `
      query {
        works {
          uid
          link
          imageJob
          thumbnailheight
          thumbnailwidth
        }
      }
    `

  const { data } = await graphQLClient.executeOperation({ query })

  const images = data.works.map((work: WorkProps) => {
    return {
      src: work.imageJob,
      link: work.link,
      thumbnail: work.imageJob,
      thumbnailWidth: Number(work.thumbnailwidth),
      thumbnailHeight: Number(work.thumbnailheight)
    }
  })

  return {
    props: {
      images
    },

    revalidate: 30 * 60 // 1 Hour
  }
}
