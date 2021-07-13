import Prismic from '@prismicio/client'
import { getPrismicClient } from '../service/prismic'

type WorkProps = {
  uid: string
  createdAt: string
  imageJob: string
  link: string
  thumbnailheight: string
  thumbnailwidth: string
}

export const getAllWorks = async (): Promise<WorkProps[]> => {
  const prismic = getPrismicClient()
  const { results } = await prismic.query(
    [Prismic.predicates.at('document.type', 'works')],
    {
      fetch: [
        'works.image_job',
        'works.link',
        'works.thumbnailwidth',
        'works.thumbnailheight'
      ]
    }
  )

  const work = results.map(result => {
    return {
      uid: result.uid,
      createdAt: result.first_publication_date,
      imageJob: result.data.image_job.url,
      link: result.data.link[0].text,
      thumbnailheight: result.data.thumbnailheight[0].text,
      thumbnailwidth: result.data.thumbnailwidth[0].text
    }
  })

  return work
}
