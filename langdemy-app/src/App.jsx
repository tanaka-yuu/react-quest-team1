// App.js -> App.jsx (Router.jsxでルーティングする場合)
import React from "react";
import Router from "./Router";
import Header from "./components/parts/global/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Router />
      </main>
    </div>
  );
};

export default App;
