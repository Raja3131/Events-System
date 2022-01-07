import {call,put,takeLatest,fork} from 'redux-saga/effects'
import React from 'react'
import { GetRequest,PutRequest,PostRequest,DeleteRequest} from '../../Request/EventRequest/Get'

function* GetRequests(){
    try{
        let Response= yield call(GetRequest)
        yield put({type:'GETOPERATION',data:Response})
    }catch(err){
        console.log(err)
    }
    
}
function* PutRequests({id,data}){
    try{
        let Res= yield call(PutRequest,id,data)
        if(Res.status===200){
            yield put({type:'PUTOPERATION',data:Res.data,id:id})
        }
        
    }catch(err){
        console.log('error')
        console.log(err)
    }
}

function* PostRequests({data}){
        try{
        let Res=yield call(PostRequest,data)
        if(Res.status === 200){ 
            yield put({type:'POSTOPERATION',data:data})
        }
        }catch(err){
        console.log(err)
        }
}

function* DeleteRequests({id}){
    try{
        console.log(id)
        let Res=yield call(DeleteRequest,id)
        if(Res.status===200){
            yield put({type:'DELETEOPERATION',id:Res.data})
        }
    }catch(err){

    }
}

function* getWatcherSaga() {
    yield takeLatest("GET", GetRequests);
  }

function* putWatcherSaga() {
    yield takeLatest("PUT", PutRequests);
  }

function* postWatcherSaga(){
    yield takeLatest('POST',PostRequests);
}
function* deleteWatcherSaga(){
    yield takeLatest('DELETE',DeleteRequests)
}
  
   
export const watcherUserSaga=[fork(getWatcherSaga),fork(putWatcherSaga),fork(postWatcherSaga),fork(deleteWatcherSaga)]
