export const getData = () => {
  return {
    type: "GET",
  }
};

export const putData = (id,data) => {
  return {
    type: "PUT",
    id,
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
return{
  type:"DELETE",
  id
}
}