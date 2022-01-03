import axios from 'axios'
import {URL} from '../../../Api/EventApi'

export const GetRequest=async()=>{

   return await axios.get(URL).then((response)=>response.data).catch((err)=>console.log(err))

}

export const PutRequest=async(id,data)=>{
    return await axios.put(`${URL}/${id}`,data).then((response)=>response).catch(()=>{
        console.log('err')
    })
}

export const PostRequest=async(data)=>{
    return await axios.post(`${URL}/new`,data).then((res)=>res).catch((err)=>console.log(err))
}

export const DeleteRequest=async(id)=>{
    return await axios.delete(`${URL}/${id}`).then((res)=>res).catch((err)=>console.log(err))
}