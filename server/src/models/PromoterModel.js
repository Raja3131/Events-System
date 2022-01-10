import mongoose from 'mongoose';

const promoterSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,


    },
    password: {
        type: String,

    }
})

const PromoterSchema= mongoose.model('PromoterSchema',promoterSchema);

export default PromoterSchema;