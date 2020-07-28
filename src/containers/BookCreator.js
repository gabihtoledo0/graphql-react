import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function BookCreator() {
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      bookTitle: "",
    },
    validationSchema: yup.object({
      bookTitle: yup.string().required("o título do livro é obrigatório"),
    }),
    onSubmit: (values, actions) => {
      console.log({
        bookTitle: values.bookTitle,
        authorId: values.authorId
      })
    }
  });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          autoComplete="off"
          placeholder="Título do livro"
          {...getFieldProps("bookTitle")}
        />
        {touched.bookTitle && errors.bookTitle ? (
          <small>{errors.bookTitle}</small>
        ) : null}
      </div>
      <button type="submit" disabled={!isValid}>Adicionar</button>
    </form>
  );
}

export default BookCreator;
