import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://locahost:8080/"
});

export default client;