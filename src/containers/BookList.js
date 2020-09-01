import React from "react";
import { useQuery } from "react-apollo";
import * as queries from "../api/queries";
import styles from "./BookList.module.css"

function BookList() {
  const { loading, error, data } = useQuery(queries.BOOKS);
  if (loading) {
    return <h1>Carregando</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {data.books.map((book) => {
        return (
          <span key={book.id}>
            <p className={styles.books}>{book.title}</p>
            <ul>
              {book.authors.map((author) => {
                return (
                  <>
                    <span className={styles.authors}key={author.id}><b>Autor:</b> {author.name}</span>
                  </>
                );
              })}
            </ul>
          </span>
        );
      })}
    </div>
  );
}

export default BookList;
