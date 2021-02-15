
// npm run startして最初に呼び出される基盤のファイル
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // reduxを使う宣言
import createStore from "./reducks/store/createStore";
import { ConnectedRouter } from "connected-react-router";
import * as History from "history"; // ルーティングにおいてどこのURLに居たかなどの履歴を残してくれるパッケージ

const history = History.createBrowserHistory(); 
const store = createStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
