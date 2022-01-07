import {combineReducers} from 'redux'
import fetch from './EventReducer/Reducer.js'
<<<<<<< HEAD
import Tittle from './Tittle/Reducer.js'

 const reducer=combineReducers({'data':fetch,'Tittle':Tittle})
=======
import manager from './ManagerReducer/ManagerReducer'

 const reducer=combineReducers({'data':fetch,'manager':manager})
>>>>>>> 02521bdf8cdf9e73a77cde94ffad753bfb9c56fe

 export default reducer