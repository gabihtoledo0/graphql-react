import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function AuthorCreator() {
  const { getFieldProps, toucher, errors, isValid } = useFormik({
    initialValues: {
      authorName: "",
    },
    validationSchema: yup.object({
      authorName: yup.string().required("O nome do autor é obrigatório"),
    }),
  });
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="nome do autor"
          autoComplete="off"
          {...getFieldProps("authorName")}
        />
        {toucher.authorName && errors.authorName ? (
          <small>{errors.authorName}</small>
        ) : null}
      </div>
      <button type="submit" disabled={!isValid}>Adicionar</button>
    </form>
  );
}

export default AuthorCreator;
