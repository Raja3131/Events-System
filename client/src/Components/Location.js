import { Typography,Grid } from "@mui/material";
import React from "react";
import Input from "./input";

const Location=({Location,onchange,value})=>{
    return(
        <div>
            <Typography>{Location}</Typography>
            <Grid container item xs={12} spacing={5}>
                <Grid  item xs={3}>
                    <Input type='text' name='country' label='Country' onchange={onchange} value={value.country} />
               </Grid>
                <Grid  item xs={3}>
                    <Input type='text' name='state' label='State' onchange={onchange} value={value.state} />
                </Grid>
                <Grid  item xs={3}>
                     <Input type='text' name='district' label='District' onchange={onchange} value={value.district} />
                </Grid>
                <Grid  item xs={3}>
                    <Input type='text' name='city' label='City' onchange={onchange} value={value.city} />
                </Grid> 
            </Grid>
        </div>
    )
}
export default Location