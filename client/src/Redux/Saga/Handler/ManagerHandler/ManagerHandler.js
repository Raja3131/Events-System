import {call,put,takeLatest,fork} from 'redux-saga/effects'
import { GetRequest,PutRequest,PostRequest,DeleteRequest} from '../../Request/ManagerRequest/ManagerRequest'

function* GetRequests(){
    try{
        let Response= yield call(GetRequest)
        yield put({type:'GET_MANAGER',data:Response})
    }catch(err){
        console.log(err)
    }
    
}
function* PostRequests({data}){
        try{
        let Res=yield call(PostRequest,data)
        if(Res.status === 200){ 
            yield put({type:'POST_MANAGER',data:data})
        }
        }catch(err){
        console.log(err)
        }
}

function* PutRequests({id,data}){
    try{
        let Res= yield call(PutRequest,id,data)
        if(Res.status===200){
            yield put({type:'PUT_MANAGER',data:Res.data,id:id})
        }
        
    }catch(err){
        console.log('error')
        console.log(err)
    }
}

function* DeleteRequests({id}){
    try{
        let Res=yield call(DeleteRequest,id)
        if(Res.status===200){
            yield put({type:'DELETE_MANAGER',id:Res.data})
        }
    }catch(err){

    }
}

function* getManagerSaga() {
    yield takeLatest("GET_MANAGER", GetRequests);
  }

    function* putManagerSaga() {
    yield takeLatest("PUT_MANAGER", PutRequests);
  }

    function* postManagerSaga(){
    yield takeLatest('POST_MANAGER',PostRequests);
}

    function* deleteManagerSaga(){
    yield takeLatest('DELETE_MANAGER',DeleteRequests)
}

export default function ManagerSaga(){
  const getManager=fork(getManagerSaga)
    const putManager=fork(putManagerSaga)
    const postManager=fork(postManagerSaga)
    const deleteManager=fork(deleteManagerSaga)
    return [getManager,putManager,postManager,deleteManager]
}