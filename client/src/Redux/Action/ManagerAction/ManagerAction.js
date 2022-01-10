export const getData = () => {
    return {
      type: "GET",
    }
  };
  
  export const putData = (data) => {
    return {
      type: "PUT",
      id:data._id,
      data
    }
  };
  export const postData=(data)=>{
  return{
    type:"POST",
    data
  }
  }
  export const deleteData=(id)=>{
    console.log(id)
  return{
    type:"DELETE",
    id:id._id
  }
  }