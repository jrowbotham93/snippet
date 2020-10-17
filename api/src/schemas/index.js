import {
  gql
} from 'apollo-server-express';

import userSchema from './user';
import snippetSchema from './snippet';

// defines all types shared within the schemas - schema stitching
const linkSchema = gql `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`

export default [userSchema, snippetSchema, linkSchema]
