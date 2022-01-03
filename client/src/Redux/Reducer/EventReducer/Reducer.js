let initial = { data: [] }

const fetch = (state = initial, action) => {
    switch (action.type) {
        case 'GET':
            return state;
        case 'PUT':
            const array = [...state.data];
            for (let i = 0; i < array.length; i++) {
                if (array[i]._id === action.id) {
                    array.splice(i, 1, action.data)
                    return { ...state, data: array }
                }
            }

        case 'POST':
            let newlist = [...state.data];
            newlist.push(action.data)
            let newState = {
                ...state,
                data: newlist
            }
            return newState;
        case 'DELETE':
            const deletearray = [...state.data];
            for (let i = 0; i < deletearray.length; i++) {
                if (deletearray[i]._id === action.id) {
                    deletearray.splice(i, 1)
                    return { ...state, data: deletearray }
                }
            }
        case 'GETOPERATION':
            return { ...state, data: action.data };
        case 'PUTOPERATION':
        case 'POSTOPERATION':
        case 'DELETEOPERATION':
            return state;
        default:
            return state;
    }

}

export default fetch