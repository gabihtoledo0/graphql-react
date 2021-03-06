import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useQuery, useMutation } from "react-apollo";
import * as queries from "../api/queries";
import * as mutations from "../api/mutations";

function BookCreator() {
  const { loading, error, data } = useQuery(queries.AUTHORS);
  const [addBook] = useMutation(mutations.ADD_BOOK);
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      bookTitle: "",
      authorId: "",
    },
    validationSchema: yup.object({
      bookTitle: yup.string().required("O título do livro é obrigatório"),
      authorId: yup.string().required("O nome do autor é obrigatório"),
    }),
    onSubmit: (values, actions) => {
      addBook({
        variables: {
          title: values.bookTitle,
          authorsId: [values.authorId],
        },
        refetchQueries: [
          { query: queries.BOOKS }
        ],
      });
      actions.setValues({ bookTitle: "", authorId: "" }, false);
    },
  });

  if (loading) {
    return <h1>Carregando</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

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
      <div>
        <select {...getFieldProps("authorId")}>
          <option value="" disabled={true}>
            Selecione
          </option>
          {data.authors.map((author) => {
            return <option value={author.id}>{author.name}</option>;
          })}
        </select>
        {touched.authorId && errors.authorId ? (
          <small>{errors.authorId}</small>
        ) : null}
      </div>
      <button type="submit" disabled={!isValid}>
        Adicionar
      </button>
    </form>
  );
}

export default BookCreator;
