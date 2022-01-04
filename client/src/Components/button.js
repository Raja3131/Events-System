import React from 'react'
import {Button} from '@material-ui/core'


const Buttons=({type,reset,name})=>{
// const handleSubmit=(values,formikHelpers)=>{
//     // debugger
//     console.log(values)
//     formikHelpers.resetForm();
// }
return <Button variant='outlined' type={type} onClick={reset}>{name}</Button>
}
export default Buttons