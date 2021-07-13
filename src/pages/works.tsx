import React from 'react'
import Gallery from 'react-grid-gallery'

import { images } from '../data/ImagesData'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { Container } from '../styles/pages/Works'

export default function Home(): JSX.Element {
  function handleClickOnImage(id: number) {
    const selectedImage = images[id]

    if (selectedImage) {
      window.open(selectedImage.link, '_blank')
    }
  }

  return (
    <>
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
