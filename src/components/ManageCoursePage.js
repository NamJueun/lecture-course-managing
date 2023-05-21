import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseApi from "../api/courseApi";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  // event will be automatically passed by the browser
  function handleTitleChange() {
    debugger;
  }

  return (
    <>
      <h2> Manage Course</h2>
      <CourseForm course={course} />
      {props.match.params.slug}
      {/*{this will read the slug placeholder from theURL }*/}
    </>
  );
};

export default ManageCoursePage;
