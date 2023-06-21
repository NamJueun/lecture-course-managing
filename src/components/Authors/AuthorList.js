import React from "react";
import PropTypes from "prop-types";

function AuthorList() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

AuthorList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      authorId: PropTypes.number.isRequired,
      authorName: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AuthorList;
