import { Typography,Grid } from "@mui/material";
import React from "react";
import Input from "./input";

const Location2=({Location,onchange,value})=>{
    return(
        <div>
            <Typography>{Location}</Typography>
            <Grid container item xs={12} spacing={5}>
                <Grid  item xs={3}>
                    <Input type='text' name='country2' label='Country' onchange={onchange} value={value.country2} />
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