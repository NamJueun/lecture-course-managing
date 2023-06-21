import React from "react";
import TextInput_A from "../../actions/TextInput_A";
import PropTypes from "prop-types";

function AuthorForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput_A
        id="title"
        onChange={props.onChange}
        name="Author Name"
        // value = "props.author.name";
      />
    </form>
  );
}

export default AuthorForm;
