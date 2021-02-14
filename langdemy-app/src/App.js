// App.js -> App.jsx (Router.jsxでルーティングする場合)
import { Switch } from "@material-ui/core";
import React from "react";
import Router from "./Router";

const App = () => {
  return(
    <main>
      <Router />
    </main>
  )
}

export default App;
