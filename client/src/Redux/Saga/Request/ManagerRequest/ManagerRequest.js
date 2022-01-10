import axios from 'axios'
import {MANAGER_URL} from '../../../Api/EventApi'

export const GetRequest=async()=>{

   return await axios.get(MANAGER_URL).then((response)=>response.data).catch((err)=>console.log(err))

}

export const PutRequest=async(id,data)=>{
    return await axios.put(`${MANAGER_URL}/${id}`,data).then((response)=>response).catch(()=>{
        console.log('err')
    })
}

export const PostRequest=async(data)=>{
    console.log(data)

    return await axios.post(MANAGER_URL,data).then((res)=>res).catch((err)=>console.log(err))

}

export const DeleteRequest=async(id)=>{
    console.log('delete',id)
    return await axios.delete(`${MANAGER_URL}/${id}`).then((res)=>res).catch((err)=>console.log(err))
}