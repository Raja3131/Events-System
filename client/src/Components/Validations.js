import * as Yup from 'yup'
import {lowercaseRegEx,uppercaseRegEx,numericRegEx,lengthRegEx} from './RegEx'

export let validationSchema = Yup.object().shape({
    description: Yup.string().required("Required"),
    district: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    enddate: Yup.string().required("Required"),
    startdate: Yup.string().required("Required"),
    venue: Yup.string().required("Required"),
    organizer: Yup.string().required("Required"),
    sponsor: Yup.string().required("Required")
    
})

// age: Yup.number().required("Required"),
//     email: Yup.string().email("Invalid email").required("Required"),
//     password: Yup.string().matches(lowercaseRegEx,'must lowercse letters').matches(lengthRegEx,'must have 6 charecters').required("Required")