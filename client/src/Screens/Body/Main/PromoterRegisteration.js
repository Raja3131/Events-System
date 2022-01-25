import { Button, TextField } from "@material-ui/core";
import { Dialog, Grid,DialogContent ,Avatar } from "@mui/material";
import {styled} from '@mui/material/styles'
import React, { useState } from "react";

function PromoterRegisteration(){
    
    const Input=styled('input')({display:'none'})

    const [name,setName]=useState('')
    const [mail,setMail]=useState('')
    const [aadhar,setAadhar]=useState('')
    const [phone,setPhone]=useState('')
    const [file,setFile]=useState(null)

    return (
        <div>
            {/* <Dialog>
                <DialogContent> */}
                    <form>
                        <Grid container sx={12}>
                            <Grid item container sx={12}>
                                <Grid>
                                    <TextField variant='outlined' label='Name' name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                                </Grid>
                                <Grid>
                                    <TextField variant='outlined' label='E-mail' name="mail" value={mail} onChange={(e)=>{setMail(e.target.value)}} />
                                </Grid>
                                <Grid>
                                    <TextField variant='outlined' label='Aadhar' name="aadhar" value={aadhar} onChange={(e)=>{setAadhar(e.target.value)}} />
                                </Grid>
                                <Grid>
                                    <TextField variant='outlined' label='Phone Number' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                </Grid>
                            </Grid>
                            <Grid>
                                <Grid>
                                    <Avatar src={file} alt=""/>
                                </Grid>
                                <Grid>
                                    <img  style={{maxWidth:'100px',maxHeight:'100px'}} src={file} alt=''/>
                                </Grid>
                                <Grid><label htmlFor="contained-button-file">
                                    <Input accept="image/*" type='file' id="contained-button-file" onChange={(e)=>{
                                        console.log(e.target.value)
                                        console.log(e.target.files[0].name)
                                    setFile(e.target.value)
                                    }} />
                                    <Button variant="contained" component='span'>Upload</Button>
                                </label>
                                </Grid>
                                {/* <Grid>
                                    <TextField />
                                </Grid>
                                <Grid>
                                    <TextField />
                                </Grid>
                                <Grid>
                                    <TextField />
                                </Grid>  */}
                            </Grid>
                            <Grid></Grid>
                        </Grid>
                    </form>
                {/* </DialogContent>
            </Dialog> */}
        </div>
    )
}

export default PromoterRegisteration