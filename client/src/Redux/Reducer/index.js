import {combineReducers} from 'redux'
import fetch from './EventReducer/Reducer.js'
import Tittle from './Tittle/Reducer.js'
import Client from './ClientReducer/Reducer.js'
import Manager from './ManagerReducer/ManagerReducer.js'

 const reducer=combineReducers({'data':fetch,'Tittle':Tittle,'Client':Client,'manager':Manager})

 export default reducer