import mongoose from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

const mangerSchema = new mongoose.Schema({
    firstName: {

        type: String,
        
    },
    lastName: {
        type: String,
    },
    occupation: {
        type: String,
    
    },
    address1: {
        type: String,

    },
    address2: {
        type: String,
    },
    email: {
        type: String,
    },
   
    phone: {
        type: String,
    },
 
})

const ManagerSchema = mongoose.model('ManagerSchema', mangerSchema);

export default ManagerSchema;