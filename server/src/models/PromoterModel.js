import mongoose from 'mongoose';

const promoterSchema = new mongoose.Schema({
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

const PromoterSchema= mongoose.model('PromoterSchema',promoterSchema);

export default PromoterSchema;