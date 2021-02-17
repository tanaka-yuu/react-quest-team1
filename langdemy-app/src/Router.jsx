import React from "react";
import { Route, Switch } from "react-router";
import LessonReady from "./components/pages/LessonReady/container";
import Schedule from "./components/pages/Schedule";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

const Router = () => {
  return(
    <Switch>
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/schedule"} component={Schedule} />
      <Route exact path={"(/)?"} component={LessonReady} />
    </Switch>
  )
}

export default Router;
