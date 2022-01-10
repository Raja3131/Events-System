let initial = { data: [] }

const Client = (state = initial, action) => {
    switch (action.type) {
        case 'CLIENTGET':
        case 'CLIENTPOST':
        case 'CLIENTPUT':
        case 'CLIENTDELETE':
            return state;
        case 'GETCLIENT':
            return { ...state, data: action.data };
        case 'POSTCLIENT':
            let newlist = [...state.data];
            newlist.push(action.data)
            let newState = {
                ...state,
                data: newlist
            }
            return newState;
        case 'PUTCLIENT':
            const array = [...state.data];
            for (let i = 0; i < array.length; i++) {
                if (array[i]._id === action.id) {
                    array.splice(i, 1, action.data)
                    return { ...state, data: array }
                }
            }
        case 'DELETECLIENT':
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

export default Client