import React from "react";
import { useQuery } from "react-apollo";
import * as queries from "../api/queries";

function BookList() {
  const { loading, error, data } = useQuery(queries.BOOKS);
  if (loading) {
    return <h1>Carregando</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <ul>
      {data.books.map((book) => {
        return (
          <li key={book.id}>
            <p>{book.title}</p>
            <ul>
              {book.authors.map((author) => {
                return <li key={author.id}>{author.name}</li>;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default BookList;
