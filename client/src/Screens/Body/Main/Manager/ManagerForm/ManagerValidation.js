import * as yup from 'yup';


const validationSchema = yup.object().shape({
    
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    occupation: yup.string().required('Occupation is required'),
    address1: yup.string().required('Address is required'),
    email: yup.string().email('Invalid email').required('Email is required').matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email'),
    password: yup.string().required('Password is required'),
    phone: yup.string().required('Phone is required'),



})

export default validationSchema;