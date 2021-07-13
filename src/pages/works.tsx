import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Gallery from 'react-grid-gallery'

import { getAllWorks } from '../utils/works'

import { images } from '../data/ImagesData'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/Works'

export default function Home(props): JSX.Element {
  console.log(props)

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
  const results = await getAllWorks()

  return {
    props: {
      results
    }
  }
}
