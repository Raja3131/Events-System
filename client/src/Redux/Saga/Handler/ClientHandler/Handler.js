import {call,put,takeLatest,fork} from 'redux-saga/effects'
import { GetRequest,PutRequest,PostRequest,DeleteRequest} from '../../Request/ClientRequest/Request.js'

function* GetRequests(){
    try{
        let Response= yield call(GetRequest)
        yield put({type:'GETCLIENT',data:Response})
    }catch(err){
        console.log(err)
    }
    
}
function* PutRequests({id,data}){
    try{
        let Res= yield call(PutRequest,id,data)
        if(Res.status===200){
            yield put({type:'PUTCLIENT',data:Res.data,id:id})
        }
        
    }catch(err){
        console.log('error')
        console.log(err)
    }
}

function* PostRequests({data}){
    console.log('handler')
        try{
        let Res=yield call(PostRequest,data)
        if(Res.status === 200){ 
            yield put({type:'POSTCLIENT',data:data})
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
            yield put({type:'DELETECLIENT',id:Res.data})
        }
    }catch(err){

    }
}

function* getSaga() {
    yield takeLatest("CLIENTGET", GetRequests);
  }

function* putSaga() {
    yield takeLatest("CLIENTPUT", PutRequests);
  }

function* postSaga(){
    yield takeLatest('CLIENTPOST',PostRequests);
}
function* deleteSaga(){
    yield takeLatest('CLIENTDELETE',DeleteRequests)
}
  
   
export const clientWatcher=[fork(getSaga),fork(putSaga),fork(postSaga),fork(deleteSaga)]
