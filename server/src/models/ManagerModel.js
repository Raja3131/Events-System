import mongoose from 'mongoose';

const mangerSchema = new mongoose.Schema({
    name: {

        type: String,
        required: true,
        unique: true
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    
    }
})

const ManagerSchema = mongoose.model('ManagerSchema', mangerSchema);

export default ManagerSchema;