import axios from "axios";
import { Manager_URL } from "../../../Api/EventApi";
import { Update } from "../../../../Components/Alerts/Update";
import { Success } from "../../../../Components/Alerts/Success";

export const GetRequest=async()=>{

  return await axios.get(Manager_URL)
               .then((response)=>response.data)
               .catch((err)=>console.log(err))

}

export const PutRequest=async(id,data)=>{

   return await axios.put(`${Manager_URL}/${id}`,data)
   .then((response)=>{
      Update()
      return response
   })
   .catch(()=>{
       console.log('err')
   })

}

export const PostRequest=async(data)=>{
   return await axios.post(Manager_URL,data)
   .then((res)=>{
      Success()
      return res
   })
   .catch((err)=>console.log(err))
}

export const DeleteRequest=async(id)=>{
   console.log('delete',id)
   return await axios.delete(`${Manager_URL}/${id}`).then((res)=>res).catch((err)=>console.log(err))
}