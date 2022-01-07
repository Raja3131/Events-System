
let store={name:'Event creation'};

let Tittle = (state=store , action) => {
    
    switch(action.type){

        case 'Tittle':
            
            return state

        case 'TittleUpdated':

            return{...state,name:action.data};
            
        default:
            return state;
    }

}
export default Tittle