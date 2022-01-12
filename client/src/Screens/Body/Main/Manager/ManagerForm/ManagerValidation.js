import * as yup from 'yup';


const validationSchema = yup.object().shape({
    
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    occupation: yup.string().required('Occupation is required'),
    address1: yup.string().required('Address is required'),
    address2: yup.string().required('Address is required'),
    email: yup.string().email('Invalid email').required('Email is required').matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email'),
    password: yup.string().required('Password is required'),
    // password: yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'),
    phone: yup.string().required('Phone is required'),
    website: yup.string().required('Website is required').matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/, 'Invalid website'),



})

export default validationSchema;