import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(
    (action) => {
      courseStore.addChangeListener(onChange); // 뭐 변했나 확인함
      if (courses.length === 0) loadCourses();
      return () => courseStore.removeChangeListener(onChange);
    },
    [courses.id, courses.length]
  );

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h1>Course Page</h1>
      <Link className="btn btn-primary" to="/course">
        Add course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
