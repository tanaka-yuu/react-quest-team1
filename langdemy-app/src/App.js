import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LessonReady from "./components/LessonReady";
import Login from "./components/Login";
import Schedule from "./components/Schedule";
import Register from "./components/Register";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">LessonReady</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <LessonReady />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

