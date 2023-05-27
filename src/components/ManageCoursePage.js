import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path `/courses/:slug`
    if (courses.length === 0) {
      // 전체 course 페이지
      courseActions.loadCourses();
    } else if (slug) {
      // 특정 course 페이지
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]); // []해도 됨. 근데 이러면 종속성 설정이 안됨. useEffect()는 react가 다시 렌더링 될 때마다 다시 실행되므로 종속성 배열 선언하는 거 추천
  // event will be automatically passed by the browser

  function onChange() {
    setCourses(courseStore.getCourses());
  }
  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
    // debugger;
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";
    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault(); // This will prevent the page from posting back to ther
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved");
    });
  }
  return (
    <>
      <h2> Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
