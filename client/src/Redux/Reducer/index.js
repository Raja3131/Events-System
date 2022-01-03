import {combineReducers} from 'redux'
import fetch from './EventReducer/Reducer.js'

 const reducer=combineReducers({'data':fetch})

 export default reducer