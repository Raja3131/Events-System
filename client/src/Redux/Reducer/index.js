import {combineReducers} from 'redux'
import fetch from './EventReducer/Reducer.js'
import manager from './ManagerReducer/ManagerReducer'

 const reducer=combineReducers({'data':fetch,'manager':manager})

 export default reducer