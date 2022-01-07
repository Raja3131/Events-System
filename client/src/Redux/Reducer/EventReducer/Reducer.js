let initial = { data: [] }

const fetch = (state = initial, action) => {
    switch (action.type) {
        case 'GET':
        case 'POST':
        case 'PUT':
        case 'DELETE':
            return state;
        case 'GETOPERATION':
            return { ...state, data: action.data };
        case 'POSTOPERATION':
            let newlist = [...state.data];
            newlist.push(action.data)
            let newState = {
                ...state,
                data: newlist
            }
            return newState;
        case 'PUTOPERATION':
            const array = [...state.data];
            for (let i = 0; i < array.length; i++) {
                if (array[i]._id === action.id) {
                    array.splice(i, 1, action.data)
                    return { ...state, data: array }
                }
            }
        case 'DELETEOPERATION':
            const deletearray = [...state.data];
            for (let i = 0; i < deletearray.length; i++) {
                if (deletearray[i]._id === action.id) {
                    deletearray.splice(i, 1)
                    return { ...state, data: deletearray }
                }
            }
        default:
            return state;
    }

}

export default fetch