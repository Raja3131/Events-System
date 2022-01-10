import React from 'react'
import {Button} from '@material-ui/core'


const Buttons=({type,reset,name,dirty,isValid})=>{
return <Button  disabled={isValid} variant='outlined' type={type} onClick={()=>reset(name)}>{name}</Button>
}
export default Buttons