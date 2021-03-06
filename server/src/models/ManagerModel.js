import mongoose from 'mongoose';

const mangerSchema = new mongoose.Schema({
    firstName: {

        type: String,
        required: true
        
    },
    lastName: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true
    
    },
    address1: {
        type: String,
        required: true

    },
  
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true

    },
    phone: {
        type: String,
        required: true,
    },
 
})

const ManagerSchema = mongoose.model('ManagerSchema', mangerSchema);

export default ManagerSchema;