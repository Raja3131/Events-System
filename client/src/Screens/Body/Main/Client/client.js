import {  Button, Grid } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {Dialog,DialogContent} from '@mui/material';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { Form, Formik } from "formik";
import swal from "sweetalert";
import React,{useState,useEffect,useMemo} from "react";
import { useSelector,useDispatch } from "react-redux";
import Auto from "../../../../Components/Autocomplete";
import Input from "../../../../Components/input";
import Buttons from "../../../../Components/button";
import Location from "../../../../Components/Location";
import Location2 from "../../../../Components/Location2";
// import { validationSchema } from "../../../../Components/Validations";
import {getData,deleteData,postData,putData} from '../../../../Redux/Action/ClientAction/Action.js'

const Client = () => {

    const [load,setLoad]=useState(true)
    const [mode,deletemode]=useState(false)
    
    const [des,setDes]=useState('')
    const [action,setAction]=useState('')
    const [open,setOpen]=useState(false)
    const [gridApi, setGridApi] = useState(null);



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
        setInitialval(selectedRows[0])
        deletemode(true)
        setOpen(false)
  }


let dispatch=useDispatch()
    let val=useSelector(state=>state.Client.data)

    useEffect(()=>{
       dispatch(getData())
    },[load])

    const handleSubmit = async(values, formikHelpers) => {

        console.log('hai')
        console.log(values)
        setLoad(!load)
        if(action==='delete'){
            console.log('delete')
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
                    setInitialval(initial)
                    deletemode(false)
                    formikHelpers.resetForm()
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
            formikHelpers.resetForm()
            return
        }

        let val={...values}

        let count=1;
        for(let x in val){
            if(x=='_id'){
                console.log('update')
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
    }

    const handleClose=()=>{
        setOpen(false)
    } 
    // const clear=(values,formikHelpers)=>{
    //     debugger
    //     console.log('clear function is working')
    //     deletemode(false)
    //     setInitialval(initial)
    //     console.log(initialval)
    // }

    return (
        <div>
            <Formik
            // validationSchema={validationSchema}
            initialValues={initialval}
            enableReinitialize={true}
            onSubmit={handleSubmit}>
                {
                    ({handleChange,values ,resetForm}) => {
                        return (
                            <Form >
                                    <Grid container item xs={12} spacing={5}>
                                        <Grid item xs={3}>
                                        <Input  required={true}
                                                value={values.name}
                                                name='name'
                                                label='Name'
                                                onchange={handleChange} />
                                            {/* <Auto
                                                deletemode={deletemode}
                                                put={setInitialval} 
                                                des={des}
                                                setDes={setDes}
                                                onchange={handleChange}
                                                name='name'
                                                value={values.name}
                                                option={val}
                                                label='Name' /> */}
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Input
                                                required={true}
                                                value={values.gst}
                                                name='gst'
                                                label='GST'
                                                onchange={handleChange} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Input
                                                required={true}
                                                value={values.aadhar}
                                                name='aadhar'
                                                label='Aadhar'
                                                onchange={handleChange} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Input
                                                required={true}
                                                value={values.pan}
                                                name='pan'
                                                label='PAN'
                                                onchange={handleChange} />
                                        </Grid>
                                    </Grid>
                        
                                    {/* <Location Location='Address 1' setInitialval={setInitialval} setDes={setDes} des={des} value={values} onchange={handleChange}/> */}
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
                                             </Grid>:null
                                             }
                                             <Grid item >
                                                 <Button variant="contained" onClick={resetForm}>Clear</Button>
                                                   {/* <Buttons 
                                                        isValid={(values.name!==''||des!=='')||values.country!==''||values.district!==''||values.state!==''||values.city!==''||values.country2!==''||values.district2!==''||values.state2!==''||values.city2!==''||values.gst!==''||values.aadhar!==''||values.pan!==''?false:true}
                                                        type='submit' 
                                                        name='clear' 
                                                        
                                                        reset={setAction}/> */}
                                             </Grid>                                        
                                    </Grid>
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
                    maxWidth='xl'
                    open={open}
                    onClose={handleClose}>
                        <div>
                   <DialogContent>
                       <div className="ag-theme-alpine" style={{height: 400, width: 'auto'}}>
                          <AgGridReact
                           onGridReady={onGridReady}
                           rowSelection={'single'}
                           onSelectionChanged={onSelectionChanged}
                           defaultColDef={defaultColDef}
                           rowData={val}>
                                <AgGridColumn filter={true} field="name"></AgGridColumn>
                                <AgGridColumn filter={true} field="gst"></AgGridColumn>
                                <AgGridColumn filter={true} field="aadhar"></AgGridColumn>
                                <AgGridColumn filter={true} field="pan"></AgGridColumn>
                                <AgGridColumn filter={true} field="state"></AgGridColumn>
                                <AgGridColumn filter={true} field="country"></AgGridColumn>
                                <AgGridColumn filter={true} field="district"></AgGridColumn>
                                <AgGridColumn filter={true} field="city"></AgGridColumn>
                                <AgGridColumn filter={true} field="state2"></AgGridColumn>
                                <AgGridColumn filter={true} field="country2"></AgGridColumn>
                                <AgGridColumn filter={true} field="district2"></AgGridColumn>
                                <AgGridColumn filter={true} field="city2"></AgGridColumn>
                          </AgGridReact>
                       </div>
                   </DialogContent>
             </div>
        </Dialog>
        </div>
    )
}

export default Client