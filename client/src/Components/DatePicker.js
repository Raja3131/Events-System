import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

const Date=({value,onchange,setDate,label})=>
               <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            openTo="year"
                                            views={['year', 'month', 'day']}
                                            label={label}
                                            value={value}
                                            onChange={(newValue) => setDate(newValue)}
                                            // onChange={onchange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                </LocalizationProvider>
export default Date