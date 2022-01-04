import React from 'react'
import {Field}from 'formik'
import { TextField } from "formik-material-ui"


const Input=({name,value,label,onchange})=>
                       <Field 
                                name={name} 
                                value={value}
                                label={label} 
                                variant='outlined' 
                                component={TextField} 
                                onChange={onchange}/>

export default Input