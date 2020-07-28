import React from "react";
import BookList from "../containers/BookList";
import AuthorCreator from "../containers/AuthorCreator";
import BookCreator from "../containers/BookCreator";

function Main() {
  return (
    <>
      <BookList />
      <AuthorCreator />
      <BookCreator />
    </>
  );
}

export default Main;
