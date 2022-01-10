import {  Grid } from "@mui/material";
import { Form, Formik } from "formik";
import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Auto from "../../../../Components/Autocomplete";
import Input from "../../../../Components/input";
import Buttons from "../../../../Components/button";
import Location from "../../../../Components/Location";
import Location2 from "../../../../Components/Location2";
import { validationSchema } from "../../../../Components/Validations";
import {getData,deleteData,postData,putData} from '../../../../Redux/Action/ClientAction/Action.js'
import { Success } from "../../../../Components/Alerts/Success";
import { Update } from "../../../../Components/Alerts/Update";

const Client = () => {

    const [load,setLoad]=useState(true)
    const [mode,deletemode]=useState(false)
    
    const [des,setDes]=useState('')
    const [action,setAction]=useState('')

    let initial={
        name:'',
        gst:'',
        aadhar:'',
        pan:'',
        state: '',
        country: '',
        district: '',
        city: '',
        state2: '',
        country2: '',
        district2: '',
        city2: ''

    }
const [initialval,setInitialval]=useState(initial)

let dispatch=useDispatch()
    let val=useSelector(state=>state.Client.data)

    useEffect(()=>{
       dispatch(getData())
    },[load])

const handleSubmit = (values, formikHelpers) => {
        
        console.log(values)
        setLoad(!load)
        if(action==='delete'){
        dispatch(deleteData(values))
        setInitialval(initial)
        deletemode(false)
        formikHelpers.resetForm()
        return
        }
        if(action==='clear'){
            deletemode(false)
            formikHelpers.resetForm()
            return
        }

        let val={...values,name:des}

        let count=1;
        for(let x in val){
            if(x=='_id'){
                dispatch(putData(values))
                Update()
                setInitialval(initial)
                deletemode(false)
                count+=1;
            }
        }
        if(count==1){
            console.log('post')
            dispatch(postData(val))
            Success()
            formikHelpers.resetForm();
        }  
    }
    return (
        <div>
            <Formik
            validationSchema={validationSchema}
            initialValues={initialval}
            autocomplete="off"
            enableReinitialize={true}
            onSubmit={handleSubmit}>
                {
                    ({handleChange,values }) => {
                        return (
                            <Form autocomplete="off" >
                                    <Grid container item xs={12} spacing={5}>
                                        <Grid item xs={3}>
                                            <Auto
                                                deletemode={deletemode}
                                                put={setInitialval} 
                                                des={des}
                                                setDes={setDes}
                                                onchange={handleChange}
                                                name='name'
                                                value={values.name}
                                                option={val}
                                                label='Name' />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Input
                                                value={values.gst}
                                                name='gst'
                                                label='GST'
                                                onchange={handleChange} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Input
                                                value={values.aadhar}
                                                name='aadhar'
                                                label='Aadhar'
                                                onchange={handleChange} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Input
                                                value={values.pan}
                                                name='pan'
                                                label='PAN'
                                                onchange={handleChange} />
                                        </Grid>
                                    </Grid>

                                    <Location Location='Address 1' value={values} onchange={handleChange}/>
                                    <Location2 Location='Address 2' value={values} onchange={handleChange}/>

                                    <br/>

                                    <Grid container item spacing={2} xs={12} direction="row" justifyContent="flex-end" alignItems="center">
                                        
                                        <Grid item >                                            
                                            <Buttons  
                                                    isValid={(values.name!==''||des!=='')&&values.country!==''&&values.district!==''&&values.state!==''&&values.city!==''&&values.gst!==''&&values.aadhar!==''&&values.pan!==''?false:true} 
                                                    type='submit' 
                                                    name='submit' 
                                                    reset={setAction} />
                                        </Grid>
                                        { 
                                        mode?
                                             <Grid item >
                                                   <Buttons 
                                                        type='submit' 
                                                        name='delete' 
                                                        reset={setAction}/>
                                             </Grid>:
                                             <Grid item >
                                                   <Buttons 
                                                        isValid={(values.name!==''||des!=='')||values.country!==''||values.district!==''||values.state!==''||values.city!==''||values.gst!==''||values.aadhar!==''||values.pan!==''?false:true}
                                                        type='submit' 
                                                        name='clear' 
                                                        reset={setAction}/>
                                             </Grid>
                                        }
                                    </Grid>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default Client