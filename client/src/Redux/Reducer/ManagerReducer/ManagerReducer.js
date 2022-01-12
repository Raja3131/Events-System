let initial = { data: [] }

const Manager = (state = initial, action) => {
    switch (action.type) {
        case 'GET_MANAGER':
        case 'POST_MANAGER':
        case 'PUT_MANAGER':
        case 'DELETE_MANAGER':
            return state;
        case 'GETMANAGER':
            return { ...state, data: action.data };
        case 'POSTMANAGER':
            let newlist = [...state.data];
            newlist.push(action.data)
            let newState = {
                ...state,
                data: newlist
            }
            return newState;
        case 'PUTMANAGER':
            const array = [...state.data];
            for (let i = 0; i < array.length; i++) {
                if (array[i]._id === action.id) {
                    array.splice(i, 1, action.data)
                    return { ...state, data: array }
                }
            }
        case 'DELETEMANAGER':
            console.log(action.id._id)
            const deletearray = [...state.data];
            for (let i = 0; i < deletearray.length; i++) {
                if (deletearray[i]._id === action.id._id) {
                    deletearray.splice(i, 1)
                    return { ...state, data: deletearray }
                }
            }
        default:
            return state;
    }

}

export default Manager