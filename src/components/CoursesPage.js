import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1>Course Page</h1>
        <a className="btn btn-primary" href="/course">
          Add course
        </a>
        <CourseList courses={courses} />
      </div>
    </>
  );
}

export default CoursesPage;
