import { Typography,Grid } from "@mui/material";
import React,{useState,useEffect} from "react";
import axios from 'axios'
import Input from "./input";
import Auto from "./Autocomplete";
import { LOCATION_URL,GET_LOCATION } from "../Redux/Api/EventApi";

const Location=({Location,onchange,value,setInitialval,setDes,des,setdis,dis})=>{
     
    // const [des,setDes]=useState('');
    const [val,setVal]=useState([])
    const [state,setState]=useState([])

    useEffect(async()=>{

        await axios.get(LOCATION_URL).then((res)=>{
            setVal(res.data)
        }).catch((err)=>console.log(err))

    },[])

    const get=async(item)=>{
        await axios.post(GET_LOCATION,item)
                    .then((res)=>setState(res.data))
  }

    return(
        <div>
            <Typography>{Location}</Typography>
            <Grid container item xs={12} spacing={5}>
                <Grid  item xs={3}>
                                            <Auto
                                                get={get}
                                                put={setInitialval} 
                                                des={des}
                                                setDes={setDes}
                                                onchange={onchange}
                                                name='country'
                                                value={value.country}
                                                option={val}
                                                label='Country' />

                    {/* <Input required={true} type='text' name='country' label='Country' onchange={onchange} value={value.country} /> */}
               </Grid>
                <Grid  item xs={3}>
                                           <Auto
                                                put={setInitialval} 
                                                dis={dis}
                                                setdis={setdis}
                                                onchange={onchange}
                                                name='state'
                                                value={value.state}
                                                option={state}
                                                label='State' />

                    {/* <Input 
                    required={true} 
                    type='text' 
                    name='state' 
                    label='State' 
                    onchange={onchange} 
                    value={value.state} /> */}
                </Grid>
                <Grid  item xs={3}>
                     <Input required={true} type='text' name='district' label='District' onchange={onchange} value={value.district} />
                </Grid>
                <Grid  item xs={3}>
                    <Input required={true} type='text' name='city' label='City' onchange={onchange} value={value.city} />
                </Grid> 
            </Grid>
        </div>
    )
}
export default Location