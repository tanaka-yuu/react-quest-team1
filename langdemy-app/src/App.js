import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LessonReady from "./components/pages/LessonReady";
import Schedule from "./components/pages/Schedule";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Lesson Ready</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            {/* <LessonReady /> */}
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
