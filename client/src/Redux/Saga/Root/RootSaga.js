import { all } from "redux-saga/effects";
import {watcherUserSaga}  from "../Handler/EventHandler/Get";
import { Watcher } from "../Handler/TittleHandler/Tittle";

export default function* RootSaga() {
    yield all([...watcherUserSaga,...Watcher]);
  }
  