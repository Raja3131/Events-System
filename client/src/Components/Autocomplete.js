import React from "react";
import {Autocomplete} from '@material-ui/lab'
import {TextField} from '@material-ui/core'

const Auto=({option,label,des,setDes,put,setStartDate,setEndDate,deletemode,name})=>
<Autocomplete 
     
    freeSolo
    disableClearable 
    size="small"
    options={option} 
    renderInput={(params)=><TextField {...params} value={des} label={label} onChange={(e)=>setDes(e.target.value)} variant='outlined'/>} 
    getOptionLabel={(opt)=>{
        return opt[name]
    }} 
    onChange={(p,values)=>{
            put(values)
            deletemode(true)
            setStartDate(values.startDate)
            setEndDate(values.endDate) 
        }}
/>

export default Auto