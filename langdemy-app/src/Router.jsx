import React from "react";
import { Route, Switch } from "react-router";
import LessonReady from "./reducks/lessonReady/container";
import Schedule from "./components/pages/Schedule";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Auth from "./components/parts/global/Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signup"} component={SignUp} />
      <Auth>
        <Route exact path={"/schedule"} component={Schedule} />
        <Route exact path={"(/)?"} component={LessonReady} />
      </Auth>
    </Switch>
  );
};

export default Router;
