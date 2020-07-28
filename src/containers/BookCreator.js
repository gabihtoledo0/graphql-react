import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function BookCreator() {
  const { getFieldProps, touched, errors } = useFormik({
    initialValues: {
      bookTitle: "",
    },
    validationSchema: yup.object({
      bookTitle: yup.string().required("o título do livro é obrigatório"),
    }),
  });
  return (
    <form>
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
    </form>
  );
}

export default BookCreator;
