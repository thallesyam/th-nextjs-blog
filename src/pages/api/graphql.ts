import { ApolloServer, gql } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAllWorks } from '../../utils/works'
import { getAllPosts } from '../../utils/posts'

const typeDefs = gql`
  type Work {
    uid: String
    createdAt: String
    imageJob: String
    link: String
    thumbnailheight: String
    thumbnailwidth: String
  }

  type Post {
    uid: String
    createdAt: String
    image: String
    title: String
    content: String
    resume: String
    slug: String
  }

  type Query {
    works: [Work]
    posts: [Post]
    sayHello: String
  }
`

const resolvers = {
  Query: {
    works() {
      return getAllWorks()
    },
    posts() {
      return getAllPosts()
    },
    sayHello() {
      return 'Hello World!'
    }
  }
}

export const graphQLClient = new ApolloServer({ typeDefs, resolvers })

export default (req: NextApiRequest, res: NextApiResponse): void => {
  graphQLClient.createHandler({
    path: '/api/graphql'
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false
  }
}
