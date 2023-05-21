import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses)); // _courses 는 getCourses() 의 인수. 인수 받아온거를 courses에 setting 함
  }, []); // 두번 실행 안되게 [] 추가해둠

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
