import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../Saga/Root/RootSaga";
import reducer from "../Reducer/index.js";

export function configureStore() {
  let sagaMiddle = createSagaMiddleware();
  let store = compose(
    applyMiddleware(sagaMiddle)
    
  )(createStore)(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  sagaMiddle.run(RootSaga);
  return store;
}


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()