import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import validationSchema from "./ManagerValidation";
import { TextField } from "formik-material-ui";
import { useDispatch, useSelector } from "react-redux";
import {
  getManager,
  putManager,
  postManager,
  deleteManager,
} from "../../../../../Redux/Action/ManagerAction/ManagerAction";
import { useEffect } from "react";
import swal from "sweetalert";
import { AgGridReact } from "ag-grid-react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import {
  CardContent,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  FormControl,
} from "@material-ui/core";
const options = [
  { label: "Sponsor", value: "sponsor" },
  { label: "Organizer", value: "organizer" },
];

export default function Event() {
  let initial = {
    firstName: "",
    lastName: "",
    occupation: "",
    address1: "",
    address2: "",
    email: "",
    password: "",
    phone: "",
    website: "",
    validateOnMount: true,
  };
  const [showButton, setShowButton] = useState(true);
  const [getData, setGetData] = useState([]);
  const [initialValues, setInitialValues] = useState(initial);
  const manager = useSelector((state) => state.manager.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManager());
  }, [dispatch]);

  useEffect(() => {
    setGetData(manager);
    console.log(manager);
  }, [manager]);

  const update = (item) => {
    console.log(item);
    setInitialValues(item);
  };

  const Delete = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted,You Will not be able to recover this file!",
      icon: "warning",
      buttons: false,
      dangerMode: true,
      buttons: ["No", "Yes"],
    }).then(async (willDelete) => {
      if (willDelete) {
        dispatch(deleteManager(item._id));
        swal("Your file has been deleted!", { icon: "success" });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  const handleSubmit = (values, formikHelpers) => {
    let count = 1;
    for (let x in initialValues) {
      if (x === "_id") {
        dispatch(putManager(values));
        setInitialValues(initial);
        count += 1;
      }
    }
    if (count === 1) {
      dispatch(postManager(values));
      formikHelpers.resetForm();
    }
  };
  const clear = () => {
    setInitialValues(initial);

   
    
    
  };
  const columns = [
    {
      headerName: "Name",
      field: "firstName",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Occupation",
      field: "occupation",
      sortable: true,
      filter: true,
    },
    {
      headerName: "phone",
      field: "phone",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Email",
      field: "email",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Action",
      field: "_id",
      cellRendererFramework: function (params) {
        return (
          <div>
            <Fab
              color="primary"
              aria-label="edit"
              onClick={() => update(params.data)}
              
              style={{
                maxHeight: "15px",
                minHeight: "15px",
                minWidth: "15px",
                maxWidth: "15px",
                padding: "4px",
              }}
            >
              <EditIcon />
            </Fab>
            <Fab
              color="secondary"
              aria-label="delete"
              onClick={() => Delete(params.data)}
              style={{
                maxHeight: "20px",
                minHeight: "20px",
                minWidth: "20px",
                maxWidth: "20px",
                padding: "4px",
              }}
            >
              <DeleteOutlineIcon />
            </Fab>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, values, handleChange, resetForm, handleBlur }) => {
          return (
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
                </Grid>
              </CardContent>
              <CardActions></CardActions>
              <Button
                disabled={!dirty || !isValid}
                enableBackground="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                variant="contained"
                color="primary"
                type="Submit"
              >
                REGISTER
              </Button>
              
              <Button
                variant="contained"
                color="primary"
                onClick={() =>clear()}
              >
                Clear
              </Button>
            </Form>
          );
        }}
      </Formik>
      <div className="ag-theme-alpine" style={{ height: 400, width: "auto" }}>
        <AgGridReact columnDefs={columns} rowData={getData}></AgGridReact>
      </div>
    </>
  );
}
