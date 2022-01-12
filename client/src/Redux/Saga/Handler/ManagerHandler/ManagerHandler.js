import {call,put,takeLatest,fork} from 'redux-saga/effects'
import { GetRequest,PutRequest,PostRequest,DeleteRequest} from '../../Request/ManagerRequest/ManagerRequest'

function* GetRequests(){
    try{
        let Response= yield call(GetRequest)
        yield put({type:'GETMANAGER',data:Response})
    }catch(err){
        console.log(err)
    }
    
}
function* PutRequests({id,data}){
    try{
        let Res= yield call(PutRequest,id,data)
        if(Res.status===200){
            yield put({type:'PUTMANAGER',data:Res.data,id:id})
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
            yield put({type:'POSTMANAGER',data:data})
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
            yield put({type:'DELETEMANAGER',id:Res.data})
        }
    }catch(err){

    }
}

function* getmanagerSaga() {
    yield takeLatest("GET_MANAGER", GetRequests);
  }

function* putmanagerSaga() {
    yield takeLatest("PUT_MANAGER", PutRequests);
  }

function* postmanagerSaga(){
    yield takeLatest('POST_MANAGER',PostRequests);
}
function* deletemanagerSaga(){
    yield takeLatest('DELETE_MANAGER',DeleteRequests)
}
  
   
export const managerWatcher=[fork(getmanagerSaga),fork(putmanagerSaga),fork(postmanagerSaga),fork(deletemanagerSaga)]
