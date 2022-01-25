import { Typography,Grid, TextField ,Autocomplete} from "@mui/material";
import React, { useState,useEffect } from "react";
import Input from "./input";
import { getAllCountries,getStatesByCountry,getCitiesByStateAndCountry } from "country-state-cities-module"
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { LOCATION_URL } from "../Redux/Api/EventApi";
import axios from 'axios'

const filterOptions = createFilterOptions({
    stringify: (option) => option.name
  });

const Location2=({Location,onchange,value})=>{

    const [country,setCountry]=useState('')
    const [val,setVal]=useState([])
    const [countryname,setCountryname]=useState('')

    useEffect(async()=>{

        await axios.get(LOCATION_URL).then((res)=>{
            console.log('res',res)
            setVal(res.data)
        }).catch((err)=>console.log(err))

    },[])
    // const countrys=async()=>{
    //     await getAllCountries()
    //        .then(data => dat))
    // .catch(e => {
    //   console.log('error',e);
    // });
    // }
    
    // countrys()
    
    return(
        <div>
            <Typography>{Location}</Typography>
            <Grid container item xs={12} spacing={5}>
                <Grid  item xs={3}>
                <Autocomplete  
                            size="small"
                            options={val} 
                            getOptionLabel={(opt)=>opt.name} 
                            filterOptions={filterOptions}
                            onChange={(e,value)=>console.log(value.code)}
                            renderInput={(params)=><TextField {...params} label='Country'   variant='outlined'/>}
                             
                            
                        />
                    {/* <TextField value={country} onChange={(e)=>setCountry(e.target.value)}/>
                    <Input type='text' name='country2' label='Country' onchange={onchange} value={value.country2} /> */}
               </Grid>
                <Grid  item xs={3}>
                    <Input type='text' name='state2' label='State' onchange={onchange} value={value.state2} />
                </Grid>
                <Grid  item xs={3}>
                     <Input type='text' name='district2' label='District' onchange={onchange} value={value.district2} />
                </Grid>
                <Grid  item xs={3}>
                    <Input type='text' name='city2' label='City' onchange={onchange} value={value.city2} />
                </Grid> 
            </Grid>
        </div>
    )
}
export default Location2