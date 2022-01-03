import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../Saga/Root/RootSaga";
import reducer from "../Reducer/index.js";

export function configureStore() {
  let sagaMiddle = createSagaMiddleware();
  let store = compose(
    applyMiddleware(sagaMiddle),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore)(reducer);

  sagaMiddle.run(RootSaga);
  return store;
}
