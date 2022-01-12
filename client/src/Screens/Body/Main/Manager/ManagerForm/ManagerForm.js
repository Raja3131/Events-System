import React, { useState } from "react";
import {Formik,Form,Field}from 'formik'
import validationSchema from "./ManagerValidation";
import { TextField } from "formik-material-ui"
import ManagerList from "../ManagerList/ManagerList";
import { useDispatch, useSelector } from "react-redux";
import { getManager, putManager, postManager, deleteManager } from "../../../../../Redux/Action/ManagerAction/ManagerAction";
import {useEffect} from 'react'


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
  } from "@material-ui/core"
  const options = [
    { label: "Sponsor", value: "sponsor" },
    { label: "Organizer", value: "organizer" },
  ]

export default function Event(){


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
// const manager=useSelector(state=>state.manager.data)
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(getManager())
},[dispatch])

    const handleSubmit=(values,formikHelpers)=>{

        dispatch(postManager(values))
        formikHelpers.resetForm();
    }

    return(
        <>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema }
              enableReinitialize={true}
              onSubmit={handleSubmit}
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
                          value={values.website}
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
            <ManagerList/>
        </>
    )
}
