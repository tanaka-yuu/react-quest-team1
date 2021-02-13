// reduxの適応をする。パッケージを導入。半分おまじない。
import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger"; // モデルのデータを変更する際にその内容をconsoleに表示してくれるパッケージ
import createSagaMiddleware from "redux-saga"; // reduxの変遷を担当
import {connectRouter, routerMiddleware} from "connected-react-router"; // reduxのStoreで管理するReact-Routerの導入
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export default function createStore(history) {
  const store = reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      ...rootReducer
    }),
    // applyMiddleware(logger, sagaMiddleware, routerMiddleware(history))
    applyMiddleware(logger, routerMiddleware(history))
  );
  // sagaMiddleware.run(rootSaga);
  return store;
}
