import { all } from "redux-saga/effects";
<<<<<<< HEAD
import {watcherUserSaga}  from "../Handler/EventHandler/Get";
import { Watcher } from "../Handler/TittleHandler/Tittle";

export default function* RootSaga() {
    yield all([...watcherUserSaga,...Watcher]);
=======
import watcherUserSaga  from "../Handler/EventHandler/Get";
import ManagerSaga from "../Handler/ManagerHandler/ManagerHandler";

export default function* RootSaga() {
    yield all([...watcherUserSaga]);
    yield all([...ManagerSaga]);
>>>>>>> 02521bdf8cdf9e73a77cde94ffad753bfb9c56fe
  }
  