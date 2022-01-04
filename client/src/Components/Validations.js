import * as Yup from 'yup'
import {lowercaseRegEx,uppercaseRegEx,numericRegEx,lengthRegEx} from './RegEx'

export let validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    // age: Yup.number().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    // password: Yup.string().matches(lowercaseRegEx,'must lowercse letters').matches(lengthRegEx,'must have 6 charecters').required("Required")
})