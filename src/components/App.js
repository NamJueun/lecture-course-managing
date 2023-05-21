import React from "react";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import CourseForm from "./CourseForm";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
function App() {
  return (
    <div className="container-fluid">
      <ToastContainer
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
      >
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course" component={ManageCoursePage} />
          <Route path="/course/:slug" component={CourseForm} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
          <Redirect from="/about-page" to="/about" />
        </Switch>
      </ToastContainer>
    </div>
  );
}

export default App;
