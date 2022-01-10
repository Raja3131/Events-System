export const getData = () => {
    return {
      type: "CLIENTGET",
    }
  };
  
  export const putData = (data) => {
    return {
      type: "CLIENTPUT",
      id:data._id,
      data
    }
  };
  export const postData=(data)=>{
      console.log('postaction')
  return{
    type:"CLIENTPOST",
    data
  }
  }
  export const deleteData=(id)=>{
    console.log(id)
  return{
    type:"CLIENTDELETE",
    id:id._id
  }
  }