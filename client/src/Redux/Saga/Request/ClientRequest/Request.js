import axios from 'axios'
import {Client_URL} from '../../../Api/EventApi'
import { Update } from '../../../../Components/Alerts/Update'
import { Success } from '../../../../Components/Alerts/Success'

export const GetRequest=async()=>{

   return await axios.get(Client_URL).then((response)=>response.data).catch((err)=>console.log(err))

}

export const PutRequest=async(id,data)=>{
    return await axios.put(`${Client_URL}/${id}`,data)
    .then((response)=>{
        Update()
        return response
    })
    .catch(()=>{
        console.log('err')
    })
}

export const PostRequest=async(data)=>{
    console.log('data',data)
    return await axios.post(Client_URL,data)
    .then((res)=>{
        Success()
        return res
    })
    .catch((err)=>console.log(err))
}

export const DeleteRequest=async(id)=>{
    console.log('delete',id)
    return await axios.delete(`${Client_URL}/${id}`).then((res)=>res).catch((err)=>console.log(err))
}