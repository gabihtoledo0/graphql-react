import React from "react";
import Main from "./pages/Main";
import { ApolloProvider } from "react-apollo";
import client from "./api/client"

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </>
  );
}

export default App;
