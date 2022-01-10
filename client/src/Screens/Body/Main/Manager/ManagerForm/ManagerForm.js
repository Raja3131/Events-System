import React, { useState } from "react";
import {Formik,Form,Field}from 'formik'
import validationSchema from "./ManagerValidation";
import { TextField } from "formik-material-ui"
import ManagerList from "../ManagerList/ManagerList";
import { useDispatch, useSelector } from "react-redux";
import { getData,putData,postData,deleteData } from "../../../../../Redux/Action/ManagerAction/ManagerAction";
import {useEffect} from 'react'
import { Autocomplete } from '@material-ui/lab'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


import {
    Grid,
    makeStyles,
    Card,
    CardContent,
    MenuItem,
    InputLabel,
    Select,
    CardActions,
    Button,
    CardHeader,
    FormControl,
    Typography,
  } from "@material-ui/core"
  const options = [
    { label: "Sponsor", value: "sponsor" },
    { label: "Organizer", value: "organizer" },
  ]

export default function Manager(){
  const defaultColDef = {
    filter: true,
    flex: 1
  };


 const [date,setDate]=useState(null)
 const [initialValues, setInitialValues] = useState({  firstName: "",
 lastName: "",
 occupation: "",
 address1: "",
 address2: "",
 email: "",
 password: "",
 phone: "",
 website: "",
 validateOnMount: true,
})
const [showButton,setShowButton]=useState(false)
const manager=useSelector(state=>state.data.data)
console.log(manager)
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getData())
},[dispatch])



    const handleSubmit=(values,formikHelpers)=>{

        console.log(values)
        formikHelpers.resetForm()
        dispatch(postData(values))
       
    }

    return(
        <>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema }
              enableReinitialize={true}
              onSubmit={handleSubmit}
              onChange={(values,formikHelpers)=>{
               
                
              }}
              >
                { 
                    ({dirty,isValid,values, handleChange,resetForm,handleBlur})=>{
                        return(
                            <Form>
                               <CardContent>
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          value={values.firstName}
                          component={TextField}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
 




                        <Field
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          value={values.lastName}
                          component={TextField}
                          onChange={handleChange}

                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Occupation
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Occupation"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            name="occupation"
                            >
                            <MenuItem>None</MenuItem>
                            {options.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Address 1"
                          variant="outlined"
                          fullWidth
                          name="address1"
                          value={values.address1}
                          component={TextField}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Address 2"
                          variant="outlined"
                          fullWidth
                          name="address2"
                          value={values.address2}
                          component={TextField}
                          onChange={handleChange}

                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values.email}
                          component={TextField}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Password"
                          variant="outlined"
                          fullWidth
                          name="password"
                          value={values.password}
                          type="password"
                          component={TextField}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          name="phone"
                          value={values.phone}
                          type="number"
                          component={TextField}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Website"
                          variant="outlined"
                          fullWidth
                          name="website"
                          type="website"
                          component={TextField}
                          onChange={handleChange}
                          />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions></CardActions>
                  <Button
                      disabled={!dirty || !isValid}
                      enableBackground="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                      variant="contained"
                      color="primary"
                      type="Submit"
                      onClick={handleSubmit}
                      
                      >
                      REGISTER
                    </Button>
                    <Button
                        disabled={null}
                        variant="contained"
                        value={values.website}
                      color="primary"
                      type="Submit"
                      onClick={resetForm}

                    >
                      Clear
                    </Button>
                            </Form>
                            )}
                   }
            </Formik>

         
                  
                    <div className="ag-theme-alpine" style={{height: 400, width:1200 }}>
                    <AgGridReact
                        rowData={manager}
                        columnSelection="multiple"
                        applyColumnDefOrder={true}
        defaultColDef={defaultColDef}
                        >
                        <AgGridColumn field="firstName"  sortable={ true } filter={ true } ></AgGridColumn>
                        <AgGridColumn field="lastName"  sortable={ true } filter={ true } ></AgGridColumn>
                        <AgGridColumn field="occupation"  sortable={ true } filter={ true } ></AgGridColumn>
                        <AgGridColumn field="address1"  sortable={ true } filter={ true } ></AgGridColumn>
                        <AgGridColumn field="address2"  sortable={ true } filter={ true } ></AgGridColumn>
                        <AgGridColumn field="email"  sortable={ true } filter={ true } ></AgGridColumn>
                        <AgGridColumn field="password"  sortable={ true } filter={ true } ></AgGridColumn>
                        <AgGridColumn field="phone"  sortable={ true } filter={ true } ></AgGridColumn>
                        <AgGridColumn field="website"  sortable={ true } filter={ true } ></AgGridColumn>
                        

                       

                        


                    </AgGridReact>
                </div>
                

             
                 
                  
                   
                
                
            
        </>
    )

 
}