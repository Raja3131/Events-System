import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { Formik, Form } from 'formik'
import { Typography, Grid } from "@mui/material";

import Input from "../../../../Components/input";
import Date from "../../../../Components/DatePicker";
import { validationSchema } from "../../../../Components/Validations";
import Buttons from "../../../../Components/button.js";
import Location from "../../../../Components/Location";
import { getData,putData,deleteData,postData} from '../../../../Redux/Action/EventAction/Action'
import Auto from "../../../../Components/Autocomplete";

export default function Event() {

    const [load,setLoad]=useState(true)
    const [startdate, setStartDate] = useState(null)
    const [enddate, setEndDate] = useState(null)
    const [mode,deletemode]=useState(false)
    const [des,setDes]=useState('')
    const [action,setAction]=useState('')

    let initial={
        description: '',
        sponsor: '',
        organizer: '',
        venue: '',
        startdate: null,
        enddate: null,
        state: '',
        country: '',
        district: '',
        city: ''
    };

let [initialval,setInitialval]=useState(initial)

    let dispatch=useDispatch()
    let val=useSelector(state=>state.data.data)

    useEffect(()=>{
       dispatch(getData())
    },[load])

    const handleSubmit = (values, formikHelpers) => {
        debugger
        console.log('submit')
        setLoad(!load)
        if(action==='delete'){
            console.log('delete')
        dispatch(deleteData(values))
        formikHelpers.resetForm()
        return
        }
        if(action==='clear'){
            console.log('clear')
            deletemode(false)
            setStartDate(null)
            setEndDate(null)
            formikHelpers.resetForm()
            return
        }

        let val={...values,description:des,startdate: startdate,enddate: enddate}

        let count=1;
        for(let x in val){
            if(x=='_id'){
                console.log('put')
                dispatch(putData(values))
                setInitialval(initial)
                deletemode(false)
                count+=1;
            }
        }
        if(count==1){
            console.log('post')
            dispatch(postData(val))
            formikHelpers.resetForm();
        }
        setDes('')
        setStartDate(null)
        setEndDate(null)  
    }

    return (
        <div>
            <Formik
                initialValues={initialval}
                // validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={handleSubmit}
            >
                {
                    ({ dirty, isValid, values, handleChange, resetForm }) => {
                        return (
                            <Form >
                                <Grid container item xs={12} spacing={5}>
                                    <Grid item xs={3}>
                                        <Auto deletemode={deletemode} setEndDate={setEndDate} setStartDate={setStartDate} put={setInitialval} des={des} setDes={setDes} onchange={handleChange} name='description' value={values.description} option={val} label='description' />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Date max={enddate}  value={startdate} name='startdate' label="Event start date" setDate={setStartDate} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Date min={startdate} value={enddate} name='enddate' label="Event end date" setDate={setEndDate} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Input value={values.venue} name='venue' label='venue' onchange={handleChange} />
                                    </Grid>
                                </Grid>
                                <Location Location='Location' value={values} onchange={handleChange} />
                                <Typography>Chief Bearear</Typography>
                                <Grid container item xs={12} spacing={5}>
                                    <Grid item xs={3}>
                                        <Input value={values.sponsor} name='sponsor' label='Event Sponsor' onchange={handleChange} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Input value={values.organizer} name='organizer' label='Event Organizer' onchange={handleChange} />
                                    </Grid>
                                    <Grid container item xs={6} spacing={0}>
                                        
                                        <Grid item xs={3}>                                            
                                            <Buttons  type='submit' name='submit' reset={setAction} />
                                        </Grid>
                                        { 
                                        mode?
                                             <Grid item xs={3}>
                                                   <Buttons type='submit' name='delete' reset={setAction}/>
                                             </Grid>:
                                             <Grid item xs={3}>
                                                   <Buttons type='submit' name='clear' reset={setAction}/>
                                             </Grid>
                                        }
                                    </Grid>
                                </Grid>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}
