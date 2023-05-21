import React from "react";

function CourseForm(props) {
  return (
    <>
      <h1>Course Form</h1>
      <form>
        <div class="form-group">
          <label for="Title">Title</label>
          <input
            id="Title"
            type="title"
            name="title"
            className="form-control"
            value={props.course.title}
          />
          <small id="titleHelp" class="form-text text-muted">
            pick one course
          </small>
        </div>
        <div class="form-group">
          <label for="Author">Author</label>
          <select
            class="form-select"
            aria-label="Default select example"
            name="authorId"
            className="form-control"
            value={props.course.authorId}
          >
            <option selected>Open this select menu</option>
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
          <small id="titleHelp" class="form-text text-muted">
            choose one
          </small>
        </div>
        <div class="form-group">
          <label for="Category">Category</label>
          <input
            type="category"
            className="form-control"
            id="category"
            name="category"
            value={props.course.category}
          />
          <small id="titleHelp" class="form-text text-muted">
            You can choose one class
          </small>
        </div>
        <a type="submit" className="btn btn-primary" href="/courses">
          {" "}
          Save
        </a>
      </form>
    </>
  );
}

export default CourseForm;
