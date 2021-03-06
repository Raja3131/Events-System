import { all } from "redux-saga/effects";
import {watcherUserSaga}  from "../Handler/EventHandler/Get";
import { Watcher } from "../Handler/TittleHandler/Tittle";
import { clientWatcher } from "../Handler/ClientHandler/Handler";
import { managerWatcher } from "../Handler/ManagerHandler/ManagerHandler";

export default function* RootSaga() {
    yield all([...watcherUserSaga,...Watcher,...clientWatcher,...managerWatcher]);
}
