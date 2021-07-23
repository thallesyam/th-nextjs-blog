import { getPrismicClient } from '../service/prismic'
import { RichText } from 'prismic-dom'

type PostProps = {
  uid: string
  createdAt: string
  image: string
  title: string
  content: string
  resume: string
}

export const getOnePost = async (slug: string): Promise<PostProps[]> => {
  const prismic = getPrismicClient()
  const result = await prismic.getByUID('posts', String(slug), {})

  const post = [
    {
      uid: result.uid,
      createdAt: new Date(result.first_publication_date)
        .toLocaleDateString('pt-br')
        .replace(/[/|\s]+/g, '.'),
      image: result.data.image.url,
      title: RichText.asHtml(result.data.title_post),
      content: RichText.asHtml(result.data.content),
      resume: RichText.asHtml(result.data.content.splice(0, 1))
    }
  ]

  return post
}
