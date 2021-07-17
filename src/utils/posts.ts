import Prismic from '@prismicio/client'
import { getPrismicClient } from '../service/prismic'
import { RichText } from 'prismic-dom'

type WorkProps = {
  uid: string
  createdAt: string
  image: string
  title: string
  content: string
  resume: string
  slug: string
}

export const getAllPosts = async (): Promise<WorkProps[]> => {
  const prismic = getPrismicClient()
  const { results } = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      fetch: [
        'posts.uid',
        'posts.first_publication_date',
        'posts.image',
        'posts.title_post',
        'posts.content',
        'posts.slugs'
      ]
    }
  )

  const post = results.map(result => {
    return {
      uid: result.uid,
      createdAt: new Date(result.first_publication_date)
        .toLocaleDateString('pt-br')
        .replace(/[/|\s]+/g, '.'),
      image: result.data.image.url,
      title: RichText.asHtml(result.data.title_post),
      content: RichText.asHtml(result.data.content),
      resume: RichText.asHtml(result.data.content.splice(0, 1)),
      slug: result.slugs[0]
    }
  })

  return post
}
