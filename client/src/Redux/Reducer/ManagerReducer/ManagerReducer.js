import {GET_MANAGER, POST_MANAGER, PUT_MANAGER, DELETE_MANAGER} from '../../../Redux/Constants/constant';
const ManagerReducer = (state = [], action) => {
    switch (action.type) {
        case GET_MANAGER:
            return state;
        case POST_MANAGER:
            let newList = [...state];
            newList.push(action.data);
            return newList;
        case PUT_MANAGER:
            let newList1 = [...state];
            newList1.map((item, index) => {
                if (item._id === action.id) {
                    newList1[index] = action.data;

                }
            })
            return newList1;
        case DELETE_MANAGER:
            let newList2 = [...state];
            newList2.map((item, index) => {
                if (item._id === action.id) {
                    newList2.splice(index, 1);
                }
            })
            break;
            default:
                return state;
        
    }
}

export default ManagerReducer;