import { all } from "redux-saga/effects";
import watcherUserSaga  from "../Handler/EventHandler/Get";

export default function* RootSaga() {
    yield all([...watcherUserSaga]);
  }
  