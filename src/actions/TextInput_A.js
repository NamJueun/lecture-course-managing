import React from "react";
import PropTypes from "prop-types";

function TextInput_A(props) {
  //error
  let wrapperclass = "form-group";
  if (props.error.length > 0) {
    wrapperclass += "has error";
  }

  return (
    <div className={wrapperclass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        ></input>
      </div>
      {props.error && <div className="alert alert-danger"> {props.error}</div>}
    </div>
  );
}

TextInput_A.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput_A.defaultProps = {
  error: "",
};

export default TextInput_A;
