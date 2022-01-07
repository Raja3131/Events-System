import {combineReducers} from 'redux'
import fetch from './EventReducer/Reducer.js'
import Tittle from './Tittle/Reducer.js'

 const reducer=combineReducers({'data':fetch,'Tittle':Tittle})

 export default reducer