import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import * as mutations from "../api/mutations"
import { useMutation } from "react-apollo"
import styles from "./BookCreator.module.css"

function AuthorCreator() {
  const [ addAuthor ] = useMutation(mutations.ADD_AUTHOR)
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      authorName: "",
    },
    validationSchema: yup.object({
      authorName: yup.string().required("O nome do autor é obrigatório"),
    }),
    onSubmit: (values, actions) => {
      addAuthor({
        variables: {
          name: values.authorName
        }
      })
      actions.setValues({ authorName: ""}, false)
    }
  });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Nome do autor"
          autoComplete="off"
          {...getFieldProps("authorName")}
        />
        {touched.authorName && errors.authorName ? (
          <small>{errors.authorName}</small>
        ) : null}
      </div>
      <button className={styles.button} type="submit" disabled={!isValid}>Adicionar</button>
    </form>
  );
}

export default AuthorCreator;
