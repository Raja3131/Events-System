import * as Yup from 'yup'
import {lowercaseRegEx,uppercaseRegEx,numericRegEx,lengthRegEx} from './RegEx'

let  phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export let validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    aadhar: Yup.string().matches(phoneRegExp,'number only allowed')
                        .matches(lengthRegEx,'please type valid aadhar')
                        .required("Required"),
    pan: Yup.string().required("Required"),
    gst: Yup.string().required("Required"), 
    // enddate: Yup.string().required("Required"),
    // startdate: Yup.string().required("Required"),
    // sponsor: Yup.string().required("Required"),
    // organizer: Yup.string().required("Required")
    
})

// age: Yup.number().required("Required"),
//     email: Yup.string().email("Invalid email").required("Required"),
//     password: Yup.string().matches(lowercaseRegEx,'must lowercse letters').matches(lengthRegEx,'must have 6 charecters').required("Required")