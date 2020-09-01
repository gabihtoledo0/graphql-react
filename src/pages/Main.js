import React from "react";
import BookList from "../containers/BookList";
import AuthorCreator from "../containers/AuthorCreator";
import BookCreator from "../containers/BookCreator";
import styles from "./Main.module.css"

function Main() {
  return (
    <div className={styles}>
      <BookList />
      <AuthorCreator />
      <BookCreator />
    </div>
  );
}

export default Main;
