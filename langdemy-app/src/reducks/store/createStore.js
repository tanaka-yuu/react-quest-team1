// reduxの適応をする。パッケージを導入。半分おまじない。
import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger"; // モデルのデータを変更する際にその内容をconsoleに表示してくれるパッケージ
import {connectRouter, routerMiddleware} from "connected-react-router"; // reduxのStoreで管理するReact-Routerの導入
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga"; // reduxの変遷を担当
const sagaMiddleware = createSagaMiddleware();

export default function createStore(history) {
  const store = reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      ...rootReducer
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history),
      sagaMiddleware,
      thunk
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
