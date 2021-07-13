import { ApolloServer, gql } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAllWorks } from '../../utils/works'

const typeDefs = gql`
  type Work {
    uid: String
    createdAt: String
    imageJob: String
    link: String
    thumbnailheight: String
    thumbnailwidth: String
  }

  type Query {
    works: [Work]
    sayHello: String
  }
`

const resolvers = {
  Query: {
    works() {
      return getAllWorks()
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
