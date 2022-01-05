import { all } from "redux-saga/effects";
import watcherUserSaga  from "../Handler/EventHandler/Get";
import ManagerSaga from "../Handler/ManagerHandler/ManagerHandler";

export default function* RootSaga() {
    yield all([...watcherUserSaga]);
    yield all([...ManagerSaga]);
  }
  