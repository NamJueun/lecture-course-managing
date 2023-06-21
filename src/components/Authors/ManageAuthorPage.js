import React, { useEffect, useState } from "react";
import AuthorForm from "./AuthorForm";
import { toast } from "react-toastify";
import authorStore from "../../stores/authorStore";
import * as authorActions from "../../actions/authorActions";

const ManageAuthorPage = (props) => {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [author, setAuthor] = useState({
    id: null,
    slug: "",
    authorName: "",
    subject: null,
    department: "",
  });

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path '/authors/:slug'
    if (authors.length === 0) {
      authorActions.loadAuthors();
    } else if (slug) {
      // 특정 author 페이지
      setAuthor(authorStore.getAuthorsBySlug(slug));
    }
    return () => authorStore.removeChangeListener(onChange);
  }, [authors.length, props.match.params.slug]);

  function onChange() {
    setAuthors(authorStore.getAuthors());
  }

  function handleChange({ target }) {
    setAuthor({
      ...author,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!author.authorName) _errors.authorName = "Author Name is required";
    if (!author.subject) _errors.subject = "Subject is required";
    if (!author.department) _errors.department = "Department is required";
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    authorActions.saveAuthor(author).then(() => {
      props.history.push("/authors");
      toast.success("Author saved");
    });
  }

  function handleChange({ target }) {
    setAuthor({
      ...authors,
      [target.name]: target.name,
    });
  }

  return (
    <>
      <h2>Manage Authors</h2>
      <AuthorForm
        errors="errors"
        author={author}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageAuthorPage;
