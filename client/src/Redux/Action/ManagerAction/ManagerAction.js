import {GET_MANAGER, POST_MANAGER, PUT_MANAGER, DELETE_MANAGER} from '../../Constants/constant';
export const getManager=() => {
    return {
        type: GET_MANAGER,
    }
};


export const postManager=(data)=>{
return{
    type:POST_MANAGER,
    data
}
}

export const putManager = (id,data) => {
    return {
        type: PUT_MANAGER,
        id,
        data
    }
}
export const deleteManager=(id)=>{
    console.log(id)
return{
    type:DELETE_MANAGER,
    id
}
}