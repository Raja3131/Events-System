import mongoose from 'mongoose';

const mangerSchema = new mongoose.Schema({
    firstName: {

        type: String,
        required: true,
        unique: true
        
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    occupation: {
        type: String,
        required: true
    
    },
    address1: {
        type: String,
        required: true

    },
    address2: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    website: {
        type: String,
        required: true
        
    }
})

const ManagerSchema = mongoose.model('ManagerSchema', mangerSchema);

export default ManagerSchema;