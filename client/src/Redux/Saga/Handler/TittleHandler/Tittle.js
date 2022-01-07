import { put,fork ,takeLatest} from "redux-saga/effects";

function* get({data}){
  console.log(data)
            yield put({type:'TittleUpdated',data})
}

function* getWatcherSaga() {
    yield takeLatest("Tittle",get);
  }

  export const Watcher=[fork(getWatcherSaga)]