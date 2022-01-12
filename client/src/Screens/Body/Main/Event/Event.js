import React, { useEffect, useState, useMemo } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { Formik, Form } from 'formik'
import { Typography, Grid } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {Dialog,DialogContent} from '@mui/material';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import swal from 'sweetalert'
import Input from "../../../../Components/input";
import DatePicker from "../../../../Components/DatePicker";
// import { validationSchema } from "../../../../Components/Validations";
import Buttons from "../../../../Components/button.js";
import Location from "../../../../Components/Location";
import { getData,putData,deleteData,postData} from '../../../../Redux/Action/EventAction/Action'
import Auto from "../../../../Components/Autocomplete";

export default function Event() {

let curdate=new Date()

    const [load,setLoad]=useState(true)
    const [startdate, setStartDate] = useState(null)
    const [enddate, setEndDate] = useState(null)
    const [mode,deletemode]=useState(false)
    
    const [open,setOpen]=useState(false)

    const [des,setDes]=useState('')
    const [action,setAction]=useState('')

    // const [curdate,setCurdate]=useState('')
    const [error,setError]=useState('')
    const [gridApi, setGridApi] = useState(null);

    // const currentdate = () => {
    //     debugger
    //     console.log('entered date')
    //         const today = new Date();
    //         const dd = String(today.getDate()).padStart(2, "0");
    //         const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    //         const yyyy = today.getFullYear();
    //         console.log(yyyy + "-" + mm + "-" + dd)
    //         setCurdate(yyyy + "-" + mm + "-" + dd)
    //         return
    // };

    const defaultColDef = useMemo( ()=> ({
        resizable: true,
        editable: true,
        sortable: true,
        flex: 1
    }), []);

      const  onGridReady = params => {
        setGridApi(params.api)
      };
    
      const onSelectionChanged = () => {
        const selectedRows = gridApi.getSelectedRows();

            setStartDate(selectedRows[0].startdate)
            setEndDate(selectedRows[0].enddate)
            setInitialval(selectedRows[0])
            deletemode(true)
            setOpen(false)
      }

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
// const [value,setVal]=useState([])
// debugger
    let dispatch=useDispatch()
    let val=useSelector(state=>state.data.data)
    
    useEffect(()=>{
       dispatch(getData())
    },[load])


    const handleSubmit = async(values, formikHelpers) => {

          
        

        if(action==='delete'){
            
           return  swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this file!",
                icon: 'warning',
                buttons: false,
                dangerMode: true,
                buttons: ['No', 'Yes']
              })
              .then(async(willDelete) => {
                if (willDelete) {
                    dispatch(deleteData(values))
                    setStartDate(null)
                    setEndDate(null)
                    setInitialval(initial)
                    deletemode(false)
                    formikHelpers.resetForm()
                    setLoad(!load)
                    swal("Your file has been deleted!", {
                        icon: "success",
                      });
                      setLoad(!load)
                      return
                } else {
                  swal("Your file is safe!");
                  
                }
              });

        }
        if(action==='clear'){
            console.log('clear')
            deletemode(false)
            setInitialval(initial)
            setStartDate(null)
            setEndDate(null)
            formikHelpers.resetForm()
            return
        }

        let val={...values,startdate: startdate,enddate: enddate}

        // currentdate()

        let count=1;
        let start=new Date(startdate)
        let end=new Date(enddate)
        console.log('startdate',start,'enddate',end)

    if(curdate.getDate()<=start.getDate() && start.getDate() <= end.getDate()){
          for(let x in val){
            
                if(x=='_id'&&action!=='delete'){
                    console.log('val',val,'values',values)
                    dispatch(putData(val))
                    setStartDate(null)
                    setEndDate(null)
                    setInitialval(initial)
                    deletemode(false)
                    count+=1;
                    setLoad(!load)
                }
            }
            if(count==1){
                dispatch(postData(val))
                 setStartDate(null)
                 setEndDate(null)  
                 setLoad(!load)
                formikHelpers.resetForm();
            }
            }else{
                setError('date is pasted so select apresent or future date')
            }
       
    }
          function submitval(values){
            if(values.venue!==''&&(values.description!==''||des!=='')&&startdate!==''&&enddate!==''&&values.country!==''&&values.district!==''&&values.state!==''&&values.city!==''&&values.sponsor!==''&&values.organizer!==''){
                return false
            }else{
                return true
            }
          }

          function clearval(values){
            if(values.venue!==''||(values.description!==''||des!=='')||startdate!==null||enddate!==null||values.country!==''||values.district!==''||values.state!==''||values.city!==''||values.sponsor!==''||values.organizer!==''){
                return false
            }else{
                return true
            }
          }

    const handleClose=()=>{
        setOpen(false)
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
                                        <Input 
                                            value={values.description} 
                                            name='description' 
                                            label='Description' 
                                            onchange={handleChange} />
                                        {/* <Auto 
                                          deletemode={deletemode}
                                          setEndDate={setEndDate}
                                          setStartDate={setStartDate} 
                                          put={setInitialval} des={des} 
                                          setDes={setDes} 
                                          onchange={handleChange} 
                                          name='description' 
                                          value={values.description} 
                                          option={val} 
                                          label='description' /> */}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <DatePicker 
                                            max={enddate}  
                                            value={startdate} 
                                            name='startdate' 
                                            label="Event start date" 
                                            setDate={setStartDate} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <DatePicker 
                                            min={startdate} 
                                            value={enddate} 
                                            name='enddate' 
                                            label="Event end date" 
                                            setDate={setEndDate} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Input 
                                            value={values.venue} 
                                            name='venue' 
                                            label='venue' 
                                            onchange={handleChange} />
                                    </Grid>
                                </Grid>
                                <Location Location='Location' value={values} onchange={handleChange} />
                                <Typography>Chief Bearear</Typography>
                                <Grid container item xs={12} spacing={5}>
                                    <Grid item xs={3}>
                                        <Input 
                                            value={values.sponsor} 
                                            name='sponsor' 
                                            label='Event Sponsor' 
                                            onchange={handleChange} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Input 
                                            value={values.organizer}
                                            name='organizer' 
                                            label='Event Organizer' 
                                            onchange={handleChange} />
                                    </Grid>
                                    <Grid container item xs={6}n spacing={2} direction={'row'} justifyContent="flex-end" alignItems="center">
                                        
                                        <Grid item>                                            
                                            <Buttons  
                                                    isValid={submitval(values)} 
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
                                             </Grid>:null
                                        }
                                        <Grid item >
                                                   <Buttons 
                                                        isValid={clearval(values)}
                                                        type='submit' 
                                                        name='clear' 
                                                        reset={setAction}/>
                                             </Grid>
                                    </Grid>
                                </Grid>
                                {
                                   error!=='' && <div>{error}</div>
                                }
                            </Form>
                        )
                    }
                }
            </Formik>
            <button style={{backgroundColor:'red'}} onClick={()=>{
                setOpen(true)
                console.log(open)
            }}><EditIcon/></button>
            <Dialog
                    fullWidth
                    maxWidth='lg'
                    open={open}
                    onClose={handleClose}>
                        <div>
                   <DialogContent>
                       <div className="ag-theme-alpine" style={{height: 400, width: 'auto'}}>
                          <AgGridReact
                           onGridReady={onGridReady}
                        //    immutableData={true}
                           rowSelection={'single'}
                           onSelectionChanged={onSelectionChanged}
                        //    reactUi={true}
                           defaultColDef={defaultColDef}
                           rowData={val}>
                                <AgGridColumn filter={true} field="description"></AgGridColumn>
                                <AgGridColumn filter={true} field="sponsor"></AgGridColumn>
                                <AgGridColumn filter={true} field="organizer"></AgGridColumn>
                                <AgGridColumn filter={true} field="venue"></AgGridColumn>
                                <AgGridColumn filter={true} field="startdate"></AgGridColumn>
                                <AgGridColumn filter={true} field="enddate"></AgGridColumn>
                                <AgGridColumn filter={true} field="state"></AgGridColumn>
                                <AgGridColumn filter={true} field="country"></AgGridColumn>
                                <AgGridColumn filter={true} field="district"></AgGridColumn>
                                <AgGridColumn filter={true} field="city"></AgGridColumn>
                          </AgGridReact>
                       </div>
                   </DialogContent>
             </div>
        </Dialog>
    </div>
    )
}
