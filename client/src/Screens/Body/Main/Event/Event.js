import React, { useState } from "react";
import Input from "../../../../Components/input";
import Date from "../../../../Components/DatePicker";
import { validationSchema } from "../../../../Components/Validations";
import {Formik,Form}from 'formik'
import Buttons from "../../../../Components/button.js";


export default function Event(){
 const [date,setDate]=useState(null)
    const initialval={
        name:'',
        email:'',
        venue:'',
        date:date
    }
    const handleSubmit=(values,formikHelpers)=>{
        formikHelpers.resetForm();
    }
    return(
        <>
            <Formik
              initialValues={initialval}
              validationSchema={validationSchema }
              enableReinitialize={true}
              onSubmit={handleSubmit}
              >
                { 
                    ({dirty,isValid,values, handleChange,resetForm})=>{
                        return(
                            <Form>
                                <Input value={values.name} name='name' label='name' onchange={handleChange}/>
                                <Input value={values.email} name='email' label='email' onchange={handleChange}/>
                                <Input value={values.venue} name='venue' label='venue' onchange={handleChange}/>
                                <Date  value={values.date} label="Basic example" setDate={setDate}/>
                                <Buttons  type='submit' name='submit'/>
                                <Buttons type='button' name='clear' reset={resetForm} />
                            </Form>
                            )}
                   }
            </Formik>
        </>
    )
}
