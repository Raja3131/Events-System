import React from 'react'
import { Grid } from '@mui/material';

const Border=(Original)=>{
    function Newcomponent(){

        return (
            <div style={{border:'1px solid red',padding:'3%'}}>
                <Grid container xs={12} justifyContent="center">
                    <Original/>
                </Grid>
            </div>
        )
    }
    return Newcomponent;
}
export default Border