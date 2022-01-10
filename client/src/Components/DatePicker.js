import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

const Date=({value,setDate,label,min,max})=>{
    
            const formats = {
                normalDate: "dd/MM/yyyy",
                keyboardDate: "dd/MM/yyyy",
            };
            
    return( <LocalizationProvider dateAdapter={AdapterDateFns} dateFormats={formats}>
                                        <DatePicker
                                            style={{height:'10px'}}
                                            disablePast
                                            minDate={min}
                                            maxDate={max}
                                            label="Responsive"
                                            // openTo="year"
                                            // views={["year", "month", "date"]}                                            
                                            label={label}
                                            value={value}
                                            onChange={(newValue) => setDate(newValue)}
                                            renderInput={(params) => <TextField  {...params} size='small' />}
                                        />
              </LocalizationProvider>)
}
export default Date