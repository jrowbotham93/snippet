import {
  gql
} from 'apollo-server-express';

const schema = gql `
  extend type Query {
    snippets: [Snippet!]!
    snippet(id: ID!): Snippet!
  }

  extend type Mutation {
    createSnippet(text: String!): Snippet!
    deleteSnippet(id: ID!): Boolean!
  }

  type Snippet {
    id: ID!
    text: String!
    user: User!
    type: String!
  }
  `;

export default schema;
