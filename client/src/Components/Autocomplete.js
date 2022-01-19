import React from "react";
import {Autocomplete} from '@material-ui/lab'
import {TextField} from '@material-ui/core'

const Auto=({option,label,des,setDes,put,setStartDate,setEndDate,deletemode,name,key,get})=>
<Autocomplete 
     
    freeSolo
    disableClearable 
    size="small"
    options={option} 
    renderInput={(params)=><TextField {...params} value={des} label={label} onBlur={()=>get(des)} onChange={(e)=>setDes(e.target.value)} variant='outlined'/>} 
    getOptionLabel={(opt)=>opt.name} 
/>

export default Auto