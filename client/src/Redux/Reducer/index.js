import {combineReducers} from 'redux'
import fetch from './EventReducer/Reducer.js'
import Tittle from './Tittle/Reducer.js'
import manager from './ManagerReducer/ManagerReducer'


 const reducer=combineReducers({'data':fetch,'Tittle':Tittle,'manager':manager})


 export default reducer