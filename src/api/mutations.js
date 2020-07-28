import { gql } from "apollo-boost";

const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!) {
    addAuthor(name: $name) {
      id
    }
  }
`

export { ADD_AUTHOR };