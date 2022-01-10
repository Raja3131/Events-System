import axios from 'axios'
import {URL} from '../../../Api/EventApi'
import swal from 'sweetalert'
import { Update } from '../../../../Components/Alerts/Update'
import { Success } from '../../../../Components/Alerts/Success'

export const GetRequest=async()=>{

   return await axios.get(URL).then((response)=>response.data).catch((err)=>console.log(err))

}

export const PutRequest=async(id,data)=>{
    return await axios.put(`${URL}/${id}`,data)
    .then((response)=>{
        Update()
        return response})
        .catch(()=>{
        console.log('err')
    })
}

export const PostRequest=async(data)=>{
    console.log(data)
    return await axios.post(URL,data)
    .then((res)=>{
    Success()
    return res
}).catch((err)=>console.log(err))
}

export const DeleteRequest=async(id)=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(async(willDelete) => {
        if (willDelete) {
            return  await axios.delete(`${URL}/${id}`).then((res)=>{
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              return res
          }).catch((err)=>console.log(err))
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    // return await axios.delete(`${URL}/${id}`).then((res)=>res).catch((err)=>console.log(err))
}